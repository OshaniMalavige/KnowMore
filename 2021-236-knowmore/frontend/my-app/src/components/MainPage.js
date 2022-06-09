import React, {Component} from 'react';
import "./mainpage.css"
import "./newNewsFeed.css"
import {
DisplaySchoolAPI,
DisplayStudentsAPI,
DisplayTeachersAPI, repositaryclustercreationAPI, userreactionAPI,
} from "../configs/config";
import {Link} from "react-router-dom";
import s1 from "../Images/usersimages/avatar1.jpg"
import s2 from "../Images/usersimages/aa12.jpg"
import axios from "axios";
import PropTypes from "prop-types";
import {share_my_knowledge} from "../configs/config3";
import {Button, Form} from "react-bootstrap";
import {FaComment, FaFacebookMessenger, FaSkype} from "react-icons/fa";

class MainPage extends Component {
    static get propTypes() {
        return {
            name: PropTypes.string,
        }
    }
    constructor(props) {
    super(props);

    this.state={
        MeStudent:[],
        para:[],
        my_knowledge:'',
        clicks:0,
        citations:'',
    }
        this.my_knowledge_share=this.my_knowledge_share.bind(this);
    }

    componentDidMount() {

        const stid = sessionStorage.getItem('studentId')
        const tid = sessionStorage.getItem('teacherId')
        const schoolid = sessionStorage.getItem('schoolId')


        if(stid != null){
            axios.get(DisplayStudentsAPI+stid)
        .then(response => {
            this.setState({ MeStudent: response.data});
            console.log(this.state.MeStudent)

        })
        .catch(function (error) {
            console.log(error);


        })
        }else if(tid != null){
            axios.get(DisplayTeachersAPI+tid)
        .then(response => {
            this.setState({ MeStudent: response.data});
            console.log(this.state.MeStudent)

        })
        .catch(function (error) {
            console.log(error);


        })
        }else{
            axios.get(DisplaySchoolAPI+schoolid)
        .then(response => {
            this.setState({ MeStudent: response.data});
            console.log(this.state.MeStudent)

        })
        .catch(function (error) {
            console.log(error);


        })
    }

        this.my_knowledge_share()

    }

    //share
    my_knowledge_share(){
    axios.get(share_my_knowledge+'?userid='+sessionStorage.getItem('studentId'))
        .then(response => {
            this.setState({   my_knowledge: response.data});
            console.log(response.data)

        })
        .catch(function (error) {
            console.log(error);


        })

    }

    IncrementItem = () => {
        this.setState({citations: this.state.citations + 1});
    }


    fun2(id){
        try {
            axios.put(share_my_knowledge + id+'/', {
                allcitationcnt: sessionStorage.getItem('studentId')
            }).then(function (response) {
                //console.log(response);
                alert('Successfully Added To ')
                window.location.reload();

            })
        }catch (e) {

        }
    }


    render() {
    const {my_knowledge}=this.state;
    return (
    <div className="mainpage1">
        <br/>
        <div align="center">
            <h2 id="word3">Newsfeed</h2>
        </div>

        <div className="post1">

            <div>
                <Link to={"/viewprofile/"} style={{  textDecoration: 'none' }}>
                    <img id="cm_im" src={s1} alt="Avatar"/> &nbsp; &nbsp; Ann Scofield
                </Link>
            </div>
            <br/>
            <div>
                <p>
                    When serving our customers, we create experiences and moments of excellence.
                    Tied in closely with the Fortude value of caring - we help solve problems and go the distance to
                    ensure we are a trusted partner and advisor. Thank you to all our customers who have chosen
                    us - we’re so happy to be part of your journey.
                </p>
            </div>
            <br/>
            <div>
                <img  src={s2} alt="Avatar"/>
            </div>


        </div>

        <div className="post1">

            <div>
                <Link to={"/viewprofile/"} style={{  textDecoration: 'none' }}>
                    <img id="cm_im" src={s1} alt="Avatar"/> &nbsp; &nbsp; Ann Scofield
                </Link>
            </div>
            <br/>
            <div>
                <p>
                    When serving our customers, we create experiences and moments of excellence.
                    Tied in closely with the Fortude value of caring - we help solve problems and go the distance to
                    ensure we are a trusted partner and advisor. Thank you to all our customers who have chosen
                    us - we’re so happy to be a part of your journey.
                </p>
            </div>
            <br/>
            <div>
                <img  src={s2} alt="Avatar"/>
            </div>


        </div>

        <div className="post1">

            <div>
                <Link to={"/viewprofile/"} style={{  textDecoration: 'none' }}>
                    <img id="cm_im" src={s1} alt="Avatar"/> &nbsp; &nbsp; Ann Scofield
                </Link>
            </div>
            <br/>
            <div>
                <p>
                    When serving our customers, we create experiences and moments of excellence.
                    Tied in closely with the Fortude value of caring - we help solve problems and go the distance to
                    ensure we are a trusted partner and advisor. Thank you to all our customers who have chosen
                    us - we’re so happy to be part of your journey.
                </p>
            </div>
            <br/>
            <div>
                <img  src={s2} alt="Avatar"/>
            </div>


        </div>

        <div>
            <Form>
            {//starting themes
                (my_knowledge !== '')
                    ? <div>
                            {my_knowledge.map((m1) => (
                                <div>
                                    {(m1.color === 'Color')?
                                        <div className="feed1">
                                            <div>
                                                {/*{console.log('allcitations lenght')}*/}
                                                {/*{console.log(((m1.allcitationcnt.length -1)/2)+1)}*/}
                                                <Link to={"/viewprofile/"} style={{  textDecoration: 'none' }}>
                                                    <img id="cm_im" src={m1.imageurl}/> &nbsp; &nbsp; {m1.username}
                                                </Link>
                                            </div>
                                            <br/>
                                            <div> <p>{m1.share_content}</p> </div>
                                            <hr/>
                                            <div className="text-center">
                                                <Button variant="" className="btn-react"><img src="https://img.icons8.com/ios-glyphs/17/000000/quote-right.png" onClick={()=>[this.IncrementItem(), this.fun2(m1.id)]}/>{(m1.allcitationcnt.length==0)?null: <b>&nbsp;{ (((m1.allcitationcnt.length -1)/2)+1)-1}</b>}</Button>
                                                <Button variant=""><FaFacebookMessenger fontSize="1.5em"/></Button>
                                                <Button variant=""><FaComment fontSize="1.5em"/></Button>
                                                <Button variant=""><FaSkype fontSize="1.5em"/></Button>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            {(m1.color === 'No')?
                                                <div className="feedNo">
                                                    <div>
                                                        {/*{console.log('allcitations lenght')}*/}
                                                        {/*{console.log(((m1.allcitationcnt.length -1)/2)+1)}*/}
                                                        <Link to={"/viewprofile/"} style={{  textDecoration: 'none' }}>
                                                            <img id="cm_im" src={m1.imageurl}/> &nbsp; &nbsp; {m1.username}
                                                        </Link>
                                                    </div>
                                                    <br/>
                                                    <div> <p>{m1.share_content}</p> </div>
                                                    <hr/>
                                                    <div className="text-center">
                                                    <Button variant="" className="btn-react"><img src="https://img.icons8.com/ios-glyphs/17/000000/quote-right.png" onClick={()=>[this.IncrementItem(), this.fun2(m1.id)]}/>{(m1.allcitationcnt.length==0)?null: <b>&nbsp;{ (((m1.allcitationcnt.length -1)/2)+1)-1}</b>}</Button>
                                                    <Button variant=""><FaFacebookMessenger fontSize="1.5em"/></Button>
                                                    <Button variant=""><FaComment fontSize="1.5em"/></Button>
                                                    <Button variant=""><FaSkype fontSize="1.5em"/></Button>
                                                    </div>
                                                </div>:
                                                <div>
                                                    {(m1.color === 'Design')?
                                                        <div className="feedDesign">
                                                            <div>
                                                                <Link to={"/viewprofile/"} style={{  textDecoration: 'none' }}>
                                                                    <img id="cm_im" src={m1.imageurl}/> &nbsp; &nbsp; {m1.username}
                                                                </Link>
                                                            </div>
                                                            <br/>
                                                            <div> <p>{m1.share_content}</p> </div>
                                                            <hr/>
                                                            <div className="text-center">
                                                                <Button variant="" className="btn-react"><img src="https://img.icons8.com/ios-glyphs/17/000000/quote-right.png" onClick={()=>[this.IncrementItem(), this.fun2(m1.id)]}/>{(m1.allcitationcnt.length==0)?null: <b>&nbsp;{ (((m1.allcitationcnt.length -1)/2)+1)-1}</b>}</Button>
                                                            <Button variant=""><FaFacebookMessenger fontSize="1.5em"/></Button>
                                                            <Button variant=""><FaComment fontSize="1.5em"/></Button>
                                                            <Button variant=""><FaSkype fontSize="1.5em"/></Button>
                                                            </div>
                                                        </div>:
                                                        <div>
                                                            {(m1.color === 'Colour')?
                                                                <div className="feedColor">
                                                                    <div>
                                                                        <Link to={"/viewprofile/"+m1.userid} style={{  textDecoration: 'none' }}>
                                                                            <img id="cm_im" src={m1.imageurl}/> &nbsp; &nbsp; {m1.username}
                                                                        </Link>
                                                                    </div>
                                                                    <br/>
                                                                    <div> <p>{m1.share_content}</p> </div>
                                                                    <hr/>
                                                                    <div className="text-center">
                                                                        <Button variant="" className="btn-react"><img src="https://img.icons8.com/ios-glyphs/17/000000/quote-right.png" onClick={()=>[this.IncrementItem(), this.fun2(m1.id)]}/>{(m1.allcitationcnt.length==0)?null: <b>&nbsp;{ (((m1.allcitationcnt.length -1)/2)+1)-1}</b>}</Button>
                                                                    <Button variant=""><FaFacebookMessenger fontSize="1.5em"/></Button>
                                                                    <Button variant=""><FaComment fontSize="1.5em"/></Button>
                                                                    <Button variant=""><FaSkype fontSize="1.5em"/></Button>
                                                                    </div>
                                                                </div>:null}
                                                        </div>
                                                    }</div>}
                                        </div>}



                                </div>

                            ))}

                            <br/>

                        <br/></div>
                    : null
            }
            </Form>
        </div>

        <br/><br/>
    </div>
    );
    }
}

export default MainPage;
