import React from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon,
  IonTitle,
  IonLabel
} from "@ionic/react";
import { flame } from "ionicons/icons";

const Start: React.FC = () => {
  const CONTENT = document.getElementById("content");
  const BUTTON = document.getElementById("button");
  const ICON = document.getElementById("icon");

  function darkMode(): void {
    if (CONTENT && BUTTON && ICON) {
      CONTENT.classList.add("dark-mode");
      BUTTON.classList.add("dark-mode-btn");
      ICON.classList.add("dark-mode-icon");
    }
  }
  
  return (
    <IonPage>
      <IonContent id="content" class="btn-container">
        <IonButton id="button" class="go-button" onClick={() => darkMode()}>
          <IonIcon id="icon" class="icon-size" icon={flame}></IonIcon>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Start;
