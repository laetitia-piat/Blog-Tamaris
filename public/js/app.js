// let auth0Client = null;

// const fetchAuthConfig = () => fetch("auth_config.json");

// const configureClient = async () => {
//     const response = await fetchAuthConfig();
//     const config = await response.json();
  
//     auth0Client = await auth0.createAuth0Client({
//       domain: config.domain,
//       clientId: config.clientId
//     });
//   };
  
//   window.onload = async () => {
//     await configureClient();
  
//     updateUI();
  
//     const isAuthenticated = await auth0Client.isAuthenticated();
  
//     if (isAuthenticated) {
//       // show the gated content
//       return;
//     }
  
//     // NEW - check for the code and state parameters
//     const query = window.location.search;
//     if (query.includes("code=") && query.includes("state=")) {
  
//       // Process the login state
//       await auth0Client.handleRedirectCallback();
      
//       updateUI();
  
//       // Use replaceState to redirect the user away and remove the querystring parameters
//       window.history.replaceState({}, document.title, "index.html");
//     }
//   };

//   // NEW
//   const updateUI = async () => { 
//     const isAuthenticated = await auth0Client.isAuthenticated();
  
//     document.getElementById("btn-logout").disabled = !isAuthenticated;
//     document.getElementById("btn-login").disabled = isAuthenticated;
    
//     // NEW - add logic to show/hide gated content after authentication
//     if (isAuthenticated) {
//       document.getElementById("gated-content").classList.remove("hidden");
  
//       document.getElementById("ipt-access-token").innerHTML = await auth0Client.getTokenSilently();
  
//       document.getElementById("ipt-user-profile").textContent = JSON.stringify(await auth0Client.getUser());
  
//     } else {
//       document.getElementById("gated-content").classList.add("hidden");
//     }
//   };

//   const login = async (targetUrl) => {
//     try {
//       console.log("Logging in", targetUrl);
  
//       const options = {
//         authorizationParams: {
//           redirect_uri: window.location.origin
//         }
//       };
  
//       if (targetUrl) {
//         options.appState = { targetUrl };
//       }
  
//       await auth0Client.loginWithRedirect(options);
//     } catch (err) {
//       console.log("Log in failed", err);
//     }
//   };
  
//   const logout = async () => {
//     await auth0Client.logout({
//       logoutParams: {
//         returnTo: window.location.origin
//       }
//     });
//   };

// The Auth0 client, initialized in configureClient()
let auth0Client = null;

/**
 * Starts the authentication flow
 */
const login = async (targetUrl) => {
  try {
    console.log("Logging in", targetUrl);

    const options = {
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    };

    if (targetUrl) {
      options.appState = { targetUrl };
    }

    await auth0Client.loginWithRedirect(options);
  } catch (err) {
    console.log("Log in failed", err);
  }
};

/**
 * Executes the logout flow
 */
const logout = async () => {
  try {
    console.log("Logging out");
    await auth0Client.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  } catch (err) {
    console.log("Log out failed", err);
  }
};

/**
 * Retrieves the auth configuration from the server
 */
const fetchAuthConfig = () => fetch("/auth_config.json");

/**
 * Initializes the Auth0 client
 */
const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0Client = await auth0.createAuth0Client({
    domain: config.domain,
    clientId: config.clientId
  });
};

/**
 * Checks to see if the user is authenticated. If so, `fn` is executed. Otherwise, the user
 * is prompted to log in
 * @param {*} fn The function to execute if the user is logged in
 */
const requireAuth = async (fn, targetUrl) => {
  const isAuthenticated = await auth0Client.isAuthenticated();

  if (isAuthenticated) {
    return fn();
  }

  return login(targetUrl);
};

// Will run when page finishes loading
window.onload = async () => {
  await configureClient();

  // If unable to parse the history hash, default to the root URL
  if (!showContentFromUrl(window.location.pathname)) {
    showContentFromUrl("/");
    window.history.replaceState({ url: "/" }, {}, "/");
  }

  const bodyElement = document.getElementsByTagName("body")[0];

  // Listen out for clicks on any hyperlink that navigates to a #/ URL
  bodyElement.addEventListener("click", (e) => {
    if (isRouteLink(e.target)) {
      const url = e.target.getAttribute("href");

      if (showContentFromUrl(url)) {
        e.preventDefault();
        window.history.pushState({ url }, {}, url);
      }
    }
  });

  const isAuthenticated = await auth0Client.isAuthenticated();

  if (isAuthenticated) {
    console.log("> User is authenticated");
    window.history.replaceState({}, document.title, window.location.pathname);
    updateUI();
    return;
  }

  console.log("> User not authenticated");

  const query = window.location.search;
  const shouldParseResult = query.includes("code=") && query.includes("state=");

  if (shouldParseResult) {
    console.log("> Parsing redirect");
    try {
      const result = await auth0Client.handleRedirectCallback();

      if (result.appState && result.appState.targetUrl) {
        showContentFromUrl(result.appState.targetUrl);
      }

      console.log("Logged in!");
    } catch (err) {
      console.log("Error parsing redirect:", err);
    }

    window.history.replaceState({}, document.title, "/");
  }

  updateUI();
};