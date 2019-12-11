import React from "react";
import { Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { settings, calendar, flame } from "ionicons/icons";

import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";
import Start from "./pages/Start";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/" component={Calendar} exact={true} />
          <Route path="/calendar" component={Calendar} exact={true} />
          <Route path="/settings" component={Settings} exact={true} />
          <Route path="/start" component={Start} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton class="icon-button" tab="settings" href="/settings">
            <IonIcon class="icon" icon={settings} />
          </IonTabButton>
          <IonTabButton class="icon-button" tab="calendar" href="/calendar">
            <IonIcon icon={calendar} />
          </IonTabButton>
          <IonTabButton class="icon-button" tab="start" href="/start">
            <IonIcon icon={flame} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
