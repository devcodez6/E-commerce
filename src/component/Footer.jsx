import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, WhatsApp } from "@material-ui/icons";
import { styled } from "styled-components"

const Container = styled.div`
display: flex;
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;

`;

const SocialContainer = styled.div`
display:flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
   display:flex;
   align-items: center;
`;

const Payment = styled.img`
   width: 50%;
`;

const Footer = () => {
  return (
    <Container>
    <Left>
        <Logo>FATY</Logo>
        <Desc>
            There are many variations of passages Lorem Ipsum available, but 
            the majority have suffered alteration in some form, by injected
             humour, or randomised words which don't look even slightly believable.
        </Desc>
        
        <SocialContainer>
            <SocialIcon color="3B5999">
             <Facebook/>
            </SocialIcon>
            <SocialIcon color="F4405F">
            <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
             <Twitter/>   
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>
            <SocialIcon color="25D366">
                <WhatsApp/>
            </SocialIcon>
        </SocialContainer>
        </Left>
    <Center>
        <Title>Usefull Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            
        </List>
    </Center>
    <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}}/> 16, Cole Street,Iyana Ipaja, Lagos. Nigeria.
            </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +234 816 126 2895 
            </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/> oniyidetaiwo15@gmail.com
            </ContactItem>
    <Payment src="https://p.kindpng.com/picc/s/44-440249_paypal-payment-methods-icons-hd-png-download.png"/>
    </Right>
    </Container>
  )
}

export default Footer