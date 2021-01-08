import React from 'react';
import './Home.css'
import { Button, Paper, styled, TextField } from "@material-ui/core";

const GitHubButton = styled(Button)({
    background: 'linear-gradient(90deg, rgba(0,182,177,1) 0%, rgba(78,232,21,1) 100%)',
    border: 0,
    borderRadius: 4,
    boxShadow: '0 3px 5px 2px linear-gradient(90deg, rgba(0,182,177,1) 0%, rgba(78,232,21,1) 100%)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});
const SubmitButton = styled(Button)({
    background: 'linear-gradient(90deg, rgba(255,8,0,1) 0%, rgba(232,219,21,1) 100%)',
    border: 0,
    borderRadius: 4,
    boxShadow: '0 3px 5px 2px linear-gradient(90deg, rgba(0,182,177,1) 0%, rgba(78,232,21,1) 100%)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});

const Home = () => {
    document.title = "DeinAdmin.codes"

    return (
        <div>
            <section className="one">
                <h1>Hello.</h1>
                <p>Welcome to my website.</p>
                <div className="one_buttons">
                    <GitHubButton onClick={() => window.open("https://github.com/DeinAdmin", '_blank')}>GitHub</GitHubButton>
                </div>
            </section>
            <section className="two">
                <Paper className="two_paper">
                    <h1>About me.<span>» Who am I?</span></h1>
                    <p>As a child I played a lot of Minecraft. Once I thought it'd be cool to code my own Minecraft plugins. This is how I came into coding. I then quickly got bored of Java so I learned new languages (JavaScript, Swift, C#, C++) and digged deeper into specific topics. Nowadays I'm a professional full stack web developer with a lot of valuable experience. You can also hire me for your portfolio or business website! </p>
                </Paper>
                <Paper className="two_paper">
                    <h1>My skills.<span>» What am I good at?</span></h1>
                    <p>Although I am an experienced developer in many languages, there are of course several areas / languages that I'm especially good at. My biggest strengths are building web & mobile applications (because I built a lot of them!) My favourite framework for building such applications is ReactJS (for mobile apps the native version)<br />I also like coding backend servers using NodeJS.</p>
                </Paper>
                <Paper className="two_paper">
                    <h1>Hire me.<span>» I like to help you!</span></h1>
                    <p>You can hire me for your portfolio website, your business website, your mobile application, (your Minecraft Plugin? xD), your web application, your Discord bot, your ... <br/><b>Whatever!</b> Contacting me is always a good option (even if you just feel lonely ^_^) I'd be glad to help you out! <br/><br/>Just use the contact form located somewhere on this site :3</p>
                </Paper>
            </section>
            <section className="three">
                <Paper className="three_contact">
                    <h1>Contact me.</h1>
                    <p>// currently not working //</p>
                    <TextField color="secondary" className="three_contact_field" label="Email address" variant="filled" />
                    <br />
                    <br/>
                    <TextField color="secondary" className="three_contact_field" label="Subject" variant="filled" />
                    <br />
                    <br/>
                    <TextField color="secondary" multiline className={"three_contact_field"} label="Message..." rows={5} variant="filled" />
                    <br />
                    <br/>
                    <SubmitButton fullWidth>submit</SubmitButton>
                </Paper>
            </section>
        </div>
    )
}

export default Home