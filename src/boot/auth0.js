// import something here
import Vue from "vue";
import { domain, clientId } from "../../auth_config.json";
import { Auth0Plugin, useAuth0 } from "../auth";

const auth = useAuth0({
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});
Vue.prototype.$auth = auth;
// Vue.use(Auth0Plugin);

// Vue.config.productionTip = false;

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
// export default ({ app, router, Vue }) => {
//   // something to do
//   Vue.config.productionTip = false;
// };

export { auth };
