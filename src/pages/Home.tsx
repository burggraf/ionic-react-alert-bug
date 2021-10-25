import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';

import './Home.css';

const Home: React.FC = () => {
  const [presentAlert] = useIonAlert()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ionic-react-alert-bug</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">

      <IonButton
								color='danger'
								fill='outline'
								onClick={() =>
									presentAlert({
										cssClass: 'my-css',
										header: 'Test',
										message: 'If you see this, it\'s working.',
										buttons: ['Cancel', { text: 'OK', handler: (d) => console.log('OK') }],
										onDidDismiss: (e) => console.log('did dismiss'),
									})
								}>
								<strong>TEST ALERT</strong>
							</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
