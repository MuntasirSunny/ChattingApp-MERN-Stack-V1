import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Signup = () => {
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [picture, setPicture] = useState('')
    const [pwdShow, setPwdShow] = useState(false);

 const postDetails = (pics) => {
     console.log("PICS")
 }

 const submitHandler = () => {
      
 }

  return (
    <VStack spacing="5px">
        <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
                placeholder="Enter Your Name"
                onChange={(e)=>setName(e.target.value)}
            />
        </FormControl>

        <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
                placeholder="Enter Your Email"
                onChange={(e)=>setEmail(e.target.value)}
            />
        </FormControl>

        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={pwdShow? "text": "password"}
                        placeholder="Enter Your Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={()=> setPwdShow(!pwdShow)}>
                        {pwdShow? "Hide": "Show"}
                    </Button>
                </InputRightElement>
                </InputGroup>
        </FormControl>

        <FormControl id="password" isRequired>
            <FormLabel>Confirmed Password</FormLabel>
                <InputGroup>
                    <Input
                        type={pwdShow? "text": "password"}
                        placeholder="Enter Your Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={()=> setPwdShow(!pwdShow)}>
                        {pwdShow? "Hide": "Show"}
                    </Button>
                </InputRightElement>
                </InputGroup>
        </FormControl>

        <FormControl id="pic">
            <FormLabel>Upload Your Picture</FormLabel>
            <Input
                type="file"
                p={1.5}
                accept="image/*"
                onChange={(e)=> postDetails(e.target.files[0])}
            />
        </FormControl>

        <Button
            colorScheme="blue"
            width="100%"
            color="white"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
        >
            Sign UP
        </Button>

    </VStack>
  )
}

export default Signup;