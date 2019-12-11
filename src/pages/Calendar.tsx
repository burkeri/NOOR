import React from "react";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonIcon,
  IonListHeader
} from "@ionic/react";
import { flame } from "ionicons/icons";

/* external components */
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

/* style */
import "../theme/index.scss";

const Calendar: React.FC = () => {
  const modifiers = {
    weekends: { daysOfWeek: [0, 6] }
  };
  const modifierStyles = {
    weekends: {
      backgroundColor: "#D4B3FF",
      color: "white",
      borderRadius: "0",
      border: "white solid 1px"
    }
  };
  return (
    <IonPage>
      <IonContent class="container">
        {/* calendar */}
        <DayPicker modifiers={modifiers} modifiersStyles={modifierStyles} />

        <IonContent class="list-container">
        {/* list  */}
          <IonList lines="none">

            <IonListHeader>
              <IonLabel>Sessions</IonLabel>
            </IonListHeader>

            <IonItem class="list-item past-session">
              <IonIcon slot="start" color="white" icon={flame} />
              <IonLabel>Monday, December 2nd, 2pm</IonLabel>
            </IonItem>

            <IonItem class="list-item past-session">
              <IonIcon slot="start" color="white" icon={flame} />
              <IonLabel>Tuesday, December 10th, 1pm</IonLabel>
            </IonItem>

            <IonItem class="list-item">
              <IonIcon slot="start" color="white" icon={flame} />
              <IonLabel>Thursday, January 2nd, 12pm</IonLabel>
            </IonItem>

            <IonItem class="list-item">
              <IonIcon slot="start" color="white" icon={flame} />
              <IonLabel>Wednesday, January 22nd, 1pm</IonLabel>
            </IonItem>

            <IonItem class="list-item">
              <IonIcon slot="start" color="white" icon={flame} />
              <IonLabel>Wednesday, February 5th, 3pm</IonLabel>
            </IonItem>

            <IonItem class="list-item">
              <IonIcon slot="start" color="white" icon={flame} />
              <IonLabel>Wednesday, February 19th, 3pm</IonLabel>
            </IonItem>

            <IonItem class="list-item">
              <IonIcon slot="start" color="white" icon={flame} />
              <IonLabel>Tuesday, March 17th, 1pm</IonLabel>
            </IonItem>

          </IonList>
        </IonContent>

      </IonContent>
    </IonPage>
  );
};

export default Calendar;
