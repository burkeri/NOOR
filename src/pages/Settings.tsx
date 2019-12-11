import {
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonToggle,
  IonItemGroup,
  IonItemDivider,
  IonRange,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import { contact, rainy, planet, flower, moon } from "ionicons/icons";
import React from "react";
import "../theme/index.scss";

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="center-items">Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div id="center-items">
          <IonIcon class="employee-icon" icon={contact} />
          <IonCardSubtitle>Employee ID: 100546</IonCardSubtitle>
        </div>

        <IonList>
          {/* Themes */}
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>Themes</IonLabel>
            </IonItemDivider>

            <IonSegment>
              <IonSegmentButton>
                <IonLabel>Rain</IonLabel>
                <IonIcon icon={rainy}></IonIcon>
              </IonSegmentButton>
              <IonSegmentButton>
                <IonLabel>Night</IonLabel>
                <IonIcon icon={moon}></IonIcon>
              </IonSegmentButton>
              <IonSegmentButton>
                <IonLabel>Space</IonLabel>
                <IonIcon icon={planet}></IonIcon>
              </IonSegmentButton>
              <IonSegmentButton>
                <IonLabel>Forest</IonLabel>
                <IonIcon icon={flower}></IonIcon>
              </IonSegmentButton>
            </IonSegment>
          </IonItemGroup>

          {/* Room */}
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>Room</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>Temperature</IonLabel>
              <IonInput class="input-position"></IonInput>
              <span id="degree">&#176;</span>
            </IonItem>

            <IonItem>
              <IonLabel>Lighting</IonLabel>
              <IonSelect class="selection-text" placeholder="Choose One" okText="Okay" cancelText="Dismiss">
                <IonSelectOption>Red</IonSelectOption>
                <IonSelectOption>Orange</IonSelectOption>
                <IonSelectOption>Yellow</IonSelectOption>
                <IonSelectOption>Green</IonSelectOption>
                <IonSelectOption>Blue</IonSelectOption>
                <IonSelectOption>Indigo</IonSelectOption>
                <IonSelectOption>Violet</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Sound</IonLabel>
              <IonSelect class="selection-text" placeholder="Choose One" okText="Okay" cancelText="Dismiss">
                <IonSelectOption>Drizzle</IonSelectOption>
                <IonSelectOption>Storm</IonSelectOption>
                <IonSelectOption>Crickets</IonSelectOption>
                <IonSelectOption>Birdsong</IonSelectOption>
                <IonSelectOption>Wind Chimes</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonItemGroup>

          {/* Chair */}
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>Massage</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>Intensity</IonLabel>
              <IonRange
                min={1000}
                max={2000}
                step={100}
                snaps={true}
                ticks={true}
                color="primary"
              />
            </IonItem>

            <IonItem>
              <IonLabel>Chair Temperature</IonLabel>
              <IonInput class="input-position"></IonInput>
              <span id="degree">&#176;</span>
            </IonItem>

            <IonItem>
              <IonLabel>Water Temperature</IonLabel>
              <IonInput class="input-position"></IonInput>
              <span id="degree">&#176;</span>
            </IonItem>
          </IonItemGroup>

          {/* Notifications */}
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>Notifications</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>Do Not Disturb</IonLabel>
              <IonToggle></IonToggle>
            </IonItem>
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
