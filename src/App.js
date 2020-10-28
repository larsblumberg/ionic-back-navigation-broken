import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import {IonReactRouter} from '@ionic/react-router'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Theme variables */
import './theme/variables.css'

const Page1 = ({history}) => (
  <IonPage>
    <IonHeader><IonToolbar><IonTitle>Page 1</IonTitle></IonToolbar></IonHeader>
    <IonContent>
      <IonButton onClick={() => history.push("/2")}>Go to Page 2</IonButton>
    </IonContent>
  </IonPage>
)

const Page2 = ({history}) => (
  <IonPage>
    <IonHeader><IonToolbar><IonTitle>Page 2</IonTitle></IonToolbar></IonHeader>
    <IonContent>
      <IonButton onClick={() => history.push("/3")}>Go to Page 3</IonButton>
    </IonContent>
  </IonPage>
)

const Page3 = ({history}) => (
  <IonPage>
    <IonHeader><IonToolbar><IonTitle>Page 3</IonTitle></IonToolbar></IonHeader>
    <IonContent>
      <IonButton onClick={() => history.go(-1)}>Go back -1</IonButton>
      <IonButton onClick={() => history.go(-2)}>Go back -2</IonButton>
    </IonContent>
  </IonPage>
)

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" render={() => <Redirect to="/1" />} />
        <Route exact path="/1" component={Page1} />
        <Route exact path="/2" component={Page2} />
        <Route exact path="/3" component={Page3} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
