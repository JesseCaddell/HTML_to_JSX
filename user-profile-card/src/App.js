import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
      <div className="App">
        <UserProfile
            name="Jane Doe"
            email="jane.doe@example.com"
            photoUrl="https://www.shutterstock.com/image-photo/cheerful-handsome-young-african-man-600nw-2432719403.jpg"
        />
      </div>
  );
}

export default App;
