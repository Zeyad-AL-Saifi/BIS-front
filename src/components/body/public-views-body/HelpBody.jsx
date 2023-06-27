import React from 'react';

const HelpBody = () => {
    return (
        <div>
            <div>
      <div className="container p-5 mb-5 h-100">
        <div className="row">
          <div className="col">
            <h1 className="text-center mb-4">Help Page</h1>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title m-3">FAQs</h5>
                <p className="card-text m-3">
                  Here are some frequently asked questions:
                </p>
                <ul className="list-group">
                  <li className="list-group-item"><p>if you wnat rejestration as new user you can get help from admin</p></li>
                  <li className="list-group-item"><p>give the adminstora your informaion and photo to create  a new accont</p></li>
                  <li className="list-group-item">Update your inforamation with admin</li>
                  <li className="list-group-item">you can reset your password without admin</li>
                  <li className="list-group-item">you can send  a note for your teacher</li>
                  <li className="list-group-item">if you are  a teacher you can send a note for your studdent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}

export default HelpBody;
