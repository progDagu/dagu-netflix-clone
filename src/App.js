// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import Row from "./components/row/Row";
import requests from './Requests'
import './app.css';
import Banner from "./components/row/banner/Banner";
import Navbar from "./components/navbar/Navbar";

function App() {
  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD8PUDQWDTrPb9N-618jUHHwAdfDiXLlO4",
//   authDomain: "netflix-clone-7172e.firebaseapp.com",
//   projectId: "netflix-clone-7172e",
//   storageBucket: "netflix-clone-7172e.appspot.com",
//   messagingSenderId: "840476535705",
//   appId: "1:840476535705:web:4fe68d52483deeb54ec108",
//   measurementId: "G-781SQPTW6Q"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcvFkJPVILSgc0tfjkvTbbJyUXMHlvmFo",
  authDomain: "netflix-clone-project-411605.firebaseapp.com",
  projectId: "netflix-clone-project-411605",
  storageBucket: "netflix-clone-project-411605.appspot.com",
  messagingSenderId: "126163535478",
  appId: "1:126163535478:web:6e67cc277a444766314157",
  measurementId: "G-L6ZXWQPX7R"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
  return (
    <div className="App">
      <Navbar/>
    <Banner/>
    <Row isLargeRow={true} title={'NETFLIX ORIGINALS'} fetchUrl={requests.fetchNetflixOrignal3}/>
    <Row isLargeRow={false} title={'TRENDING NOW'} fetchUrl={requests.fetchTrending}/>
    <Row isLargeRow={false} title={'TOP RATED'}fetchUrl={requests.fetchTopRated}/>
    <Row isLargeRow={false} title={'Action Movies'} fetchUrl={requests.fetchActionMovies}/>
    <Row isLargeRow={false} title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies}/>
    <Row isLargeRow={false} title={'Horror Movies'} fetchUrl={requests.fetchHorroMovies}/>
    <Row isLargeRow={false} title={'Romance Movies'} fetchUrl={requests.fetchRomanticMovies}/>
    <Row isLargeRow={false} title={'Documentaries'} fetchUrl={requests.fetchDocumentaries}/>
    <p style={{color:'white',textAlign:'center',margin:6,fontFamily:'sans-serif'}}>made with <span style={{color:'red'}}>❤</span> by programmer :<b>DagemawiAntex</b></p>
    
    </div>
  );
}

export default App;
