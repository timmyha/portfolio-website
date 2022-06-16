import styled from 'styled-components'
import { useState } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', message: '' })

  const onChange = (e) => {
    let { value, id } = e.target;
    setFormData(prev => (
      {
        ...prev,
        [id]: value
      }
    ))
  }

  console.log(formData)

  const onSubmit = (e) => {
    e.preventDefault()
    toast.success('contact initiated!')
  }
  return (
    <form onSubmit={() => onSubmit()}>
      <Container>
        <Content>
        <BlurbDiv href="#" className="contactblurb">
          <span>i am always interested in opportunities, advice,
          pro tips, compliments, tasteful insults, your favorite movies,
          football manager&trade; tactics, or anything else you feel i need
          to hear about.
          e-mail me:</span>
        </BlurbDiv>
        <FormDiv>
          <NameLabel for="name">name</NameLabel>
          <Name placeholder=""
            id="name"
            onChange={onChange}
            value={formData.name} />
            <MessageLabel for="message">message</MessageLabel>
          <Message placeholder=""
            id="message"
            onChange={onChange}
            value={formData.message} />
          <Button type="submit" href={formData.message.length > 1 && `mailto:timhansher@gmail.com
                                  ?Subject=new message from ${formData.name} via timmyha.vercel.app!
                                  &body=${formData.message}`}>submit</Button>
        </FormDiv>
        </Content>
      </Container>
    </form>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 92vh;
  width: 100vw;
  padding-bottom: 0px;
  padding-top: 80px;
  background-color: #111111;
  @media (max-width: 900px) {
    height : 100vh;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  margin: auto;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 500px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width: 300px;
  }
  @media (max-width: 300px) {
    flex-direction: column;
    width: 300px;
  }`

const BlurbDiv = styled.a`
  display: flex;
  width: 350px;
  text-align: justify;
  font-size: 30px;
  letter-spacing: -2px;
  margin: auto;
  font-family: IBM Plex Sans;
  @media (max-width: 900px) {
    margin-bottom: 30px;
    font-size: 20px;
  }
  @media (min-width: 900px) {
    margin-left: -20px;}`

const FormDiv = styled.div`
  display: flex;
  width: 350px;
  margin: auto;
  flex-direction: column;
  @media (max-width: 900px) {
    margin-left: 0px;
  }
  @media (min-width: 900px) {
    margin-left: 50px;}`

const NameLabel = styled.label`
  display: flex;
  width: 100%;
  margin: auto;
  margin-bottom: -20px;
  font-size: 15px;
  color: white;
  font-family: Roboto;
  `

const MessageLabel = styled.label`
  display: flex;
  width: 100%;
  margin: auto;
  margin-bottom: -20px;
  font-size: 15px;
  color: white;
  font-family: Roboto;
  `

const Name = styled.input`
  display: flex;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 5px;
  align-self: center;
  width: 355px;
  font-size: 20px;
  padding-left: 10px;
  text-align: left;
  border-radius: 3px;
  border: .1px #fe00c7 solid;
  background-color: transparent;
  color: #fe00c7;
  font-family: Roboto;
    @media (max-width: 500px) {
    width: 350px;
    padding-left: 0px;
  }`

const Message = styled.textarea`
  display: flex;
  height: 40px;
  margin-top: 20px;
  align-self: center;
  max-width: 350px;
  min-width: 350px;
  height: 300px;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 10px;
  text-align: left;
  border-radius: 3px;
  border: .1px #00d8fe solid ;
  background-color: transparent;
  color: #00d8fe;
  font-family: Roboto;
    @media (max-width: 500px) {
      min-width: 350px;
      max-width: 350px;
      padding-left: 0px;
    }`

const Button = styled.a`
    margin: auto;
    margin-top: 20px;
    width: 350px;
    border-radius: 3px;
    height: 40px;
    text-align: center;
    text-decoration: none;
    line-height: 40px;
    font-family: Roboto;
    cursor: pointer;
    background-color: transparent;
    border: .1px solid rgba(220,254,0,1);
    color: rgba(220,254,0,1);
      &:hover {
        background-color: rgba(220,254,0,1);
        color: black;
        transition: .2s;
      }
      @media (max-width: 500px) {
        max-width: 365px;
      }`

export default Contact