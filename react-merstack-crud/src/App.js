//import logo from './logo.svg';
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CreateStudent from "./component/create-student.component";
import EditStudent from "./component/edit-student.component";
import StudentList from "./component/student-list.component";
import BDExamen from "./component/BDExamen.component";
import BDFuncionarios from "./component/BDFuncionarios.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"}    className="nav-link" >
                
                    <h2>Henrry Montañez Laboratorio</h2></Link>
              </Navbar.Brand>

            <Nav className = "justify-content-end" > 
              <Nav>
                  <Link to = {"/student-list"} className = "nav-link" >
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="40pt" height="40pt" viewBox="0 0 1024.000000 1024.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <metadata>
                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                    </metadata>  
                  <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M5908 9903 c-8 -10 -48 -67 -89 -126 l-73 -108 -217 -597 -217 -597
                    -65 3 c-96 6 -122 -11 -203 -126 -78 -112 -41 -19 -439 -1117 -157 -434 -334
                    -921 -392 -1082 -58 -160 -109 -296 -113 -303 -5 -9 -38 -1 -121 29 -126 46
                    -160 50 -188 22 -25 -25 -81 -174 -81 -216 0 -46 25 -70 99 -98 l64 -23 22
                    -63 c13 -34 39 -86 58 -115 l35 -52 -302 -141 -301 -140 -58 -70 -57 -70 72
                    -151 72 -152 93 0 93 0 267 125 c147 68 269 123 270 121 2 -1 -10 -39 -27 -84
                    -29 -79 -29 -83 -19 -169 6 -48 12 -88 12 -89 9 -4 303 -109 308 -109 3 0 33
                    25 67 55 56 50 66 65 96 145 l34 89 36 -80 c20 -43 78 -168 129 -277 l92 -198
                    69 -52 c37 -29 73 -51 80 -49 6 2 75 33 154 70 l142 67 0 89 0 88 -135 291
                    c-74 159 -134 291 -133 292 2 0 39 11 83 23 44 13 102 37 130 54 l50 30 60
                    -21 c75 -26 117 -27 139 -2 20 22 86 191 86 220 0 41 -38 68 -158 111 l-118
                    43 84 231 c46 127 87 235 92 240 5 5 112 -17 254 -53 135 -33 265 -61 289 -61
                    60 0 102 31 158 116 95 143 144 161 265 99 293 -151 649 -698 810 -1244 73
                    -245 104 -469 104 -740 0 -335 -48 -574 -165 -816 -98 -204 -255 -391 -450
                    -538 -78 -58 -96 -67 -132 -67 -195 0 -493 -92 -698 -216 -65 -40 -120 -66
                    -135 -65 -46 2 -198 51 -317 101 -94 40 -323 157 -342 176 -2 2 27 41 65 86
                    106 128 100 116 73 128 -13 5 -622 223 -1354 484 -731 261 -1374 490 -1428
                    510 l-97 35 0 -101 c0 -135 20 -180 94 -213 28 -12 446 -163 929 -335 l877
                    -313 0 -94 c0 -52 5 -103 10 -114 6 -10 32 -30 58 -43 134 -68 239 -183 291
                    -317 34 -86 58 -257 47 -332 -7 -46 -8 -47 -45 -47 -49 0 -72 -26 -101 -115
                    -13 -38 -24 -73 -27 -77 -3 -6 -155 43 -395 127 l-47 17 5 42 c7 50 -16 109
                    -51 132 -12 8 -354 126 -761 263 -406 137 -763 258 -792 270 -63 25 -122 27
                    -168 5 -42 -20 -47 -28 -95 -173 -49 -145 -50 -180 -7 -226 31 -33 78 -50 743
                    -274 391 -131 748 -253 794 -270 111 -41 177 -42 221 -4 17 14 36 37 41 50 5
                    14 15 22 22 20 6 -3 100 -35 207 -71 107 -37 201 -70 209 -75 11 -7 8 -24 -15
                    -94 -27 -84 -27 -88 -11 -122 l17 -35 -978 -2 -977 -3 -59 -29 c-115 -56 -259
                    -224 -351 -405 -79 -160 -155 -394 -155 -482 l0 -39 3205 0 c3046 0 3205 1
                    3205 18 0 32 -78 335 -129 504 -97 320 -247 682 -375 903 -42 73 -55 104 -48
                    115 163 257 235 392 315 590 116 286 186 565 229 920 20 161 17 735 -5 928
                    -58 509 -167 902 -362 1293 -230 464 -538 816 -982 1124 -131 91 -165 127
                    -182 190 -15 56 -13 159 4 230 27 113 14 183 -43 223 -16 12 -159 82 -318 157
                    -158 75 -290 138 -292 140 -3 2 7 37 21 77 32 92 54 292 38 341 -13 38 -65 91
                    -98 102 -13 3 -23 12 -23 19 0 8 96 278 214 602 l214 589 15 144 c17 153 13
                    180 -25 205 -13 8 -130 53 -261 100 -246 89 -301 101 -329 69z m210 -2844
                    c102 -50 152 -135 152 -253 0 -80 -32 -148 -95 -204 -179 -157 -456 -31 -458
                    209 -3 208 213 342 401 248z m704 -5106 c96 -54 158 -170 144 -272 -31 -228
                    -298 -330 -464 -177 -118 108 -125 285 -14 399 64 67 118 88 214 83 51 -2 79
                    -10 120 -33z"/>
                    <path d="M3028 4799 c-51 -26 -72 -60 -63 -101 11 -54 78 -180 106 -201 26
                    -18 29 -19 75 -3 82 27 81 18 7 179 -37 81 -72 147 -77 147 -6 -1 -28 -10 -48
                    -21z"/>
                    <path d="M4016 4273 c-21 -60 -20 -86 2 -112 23 -29 205 -93 238 -85 27 7 68
                    62 78 106 6 25 2 27 -52 46 -31 11 -101 36 -154 55 l-97 36 -15 -46z"/>
                    <path d="M5243 3912 c-79 -37 -143 -71 -143 -77 0 -5 11 -30 23 -55 19 -36 31
                    -47 59 -54 32 -8 47 -4 125 33 107 52 123 65 123 105 0 26 -33 116 -42 116 -2
                    0 -67 -31 -145 -68z"/>
                    </g>
                  </svg>
                  </Link>
              </Nav>
              
              <Nav>
                <Nav className = "justify-content-end" >
                  <Link to = {"/edit-student"} className = "nav-link" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/></svg>
                  </Link>
                </Nav>
              </Nav>  

              <Nav>  
                  <Link to={"/create-student"}  className="nav-link" >
                  </Link>
              </Nav>
          </Nav>

              <Nav>
                  <Link to = {"#!"} className = "nav-link" >
                  </Link>
              </Nav>
            </Container>
          </Navbar>
        </header> 
            <Container>
              <Row>
                <Col md={12}>
                    <div className="wrapper">
                      <Switch>
                          <Route
                            exact
                            path="/"
                            component={(props) =><CreateStudent{...props} />}
                          />
                          <Route
                            exact
                            path="/create-student"
                            component={(props) =><CreateStudent{...props} />}
                          />
                          <Route
                            exact
                            path="/edit-student"
                            component={(props) =><EditStudent{...props} />}
                          />
                          <Route
                            exact
                            path="/student-list"
                            component={(props) =><StudentList{...props} />}
                          />
                          <Route
                            exact
                            path="/BDExamen"
                            component={(props) =><BDExamen{...props} />}
                          />
                          <Route
                            exact
                            path="/BDFuncionarios"
                            component={(props) =><BDFuncionarios{...props} />}
                          />
                      </Switch>
                    </div>
                </Col>
              </Row>
            </Container> 
      </Router> 
    </div>
  );
}

export default App;
