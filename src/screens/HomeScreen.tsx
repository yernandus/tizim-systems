import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {Box, Button, Center, Flex, Heading, Image, Input, Spinner, Text, Textarea, useToast} from "@chakra-ui/react";
import {AnimatePresence, motion} from "framer-motion";
import {createRequest} from "../services/contactService";
// @ts-ignore
import headerImage from '../assets/260164.webp';
// @ts-ignore
import gif1 from '../assets/Mobileapp.gif';
// @ts-ignore
import gif2 from '../assets/mobile_development2.gif';
// @ts-ignore
import gif3 from '../assets/phpdevelopment.gif';
// @ts-ignore
import tizim from '../assets/tizim.png';
// @ts-ignore
import intech from '../assets/intech.png';
// @ts-ignore
import icar from '../assets/fullLogo.png';
// @ts-ignore
import english from '../assets/The_Donator_of_Light.png';
// @ts-ignore
import tizimScreen from '../assets/tizim_screen.png';
// @ts-ignore
import intechScreen from '../assets/intech_screen.png';
// @ts-ignore
import englishScreen from '../assets/english.png';
// @ts-ignore
import reactIcon from '../assets/ReactIcon.png';
// @ts-ignore
import figmaIcon from '../assets/figma.png';
// @ts-ignore
import googleCloudIcon from '../assets/google cloud.png';
// @ts-ignore
import javascriptIcon from '../assets/javascript.png';
// @ts-ignore
import reduxIcon from '../assets/redux.png';
// @ts-ignore
import typescriptIcon from '../assets/typescript.png';
// @ts-ignore
import whatsappIcon from '../assets/whatsapp.png';

function HomeScreen() {
  const {t} = useTranslation();
  const [lang, setLang] = useState('en');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [errors, setErrors] = useState<string[]>([]);
  const services = [
    {
      icon: gif1,
      text: t('Product Launch Text', {lng: lang}),
      title: t('Product Launch', {lng: lang})
    },
    {
      icon: gif2,
      text: t('Product Design Text', {lng: lang}),
      title: t('Product Design', {lng: lang}),
    },
    {
      icon: gif3,
      text: t('Product Engineering Text', {lng: lang}),
      title: t('Product Engineering', {lng: lang}),
    }
  ];
  const [selectedService, setSelectedService] = useState(services[0]);

  function onChangeField(fieldName: string, setState: (val: string) => void, value: string) {
    setState(value);
    if (value) {
      return setErrors(errors.filter((e) => e !== fieldName));
    }
    if (!errors.includes(fieldName)) {
      return setErrors([...errors, fieldName]);
    }
    return null;
  }

  function onBlurField(fieldName: string, value: string) {
    if (value) {
      return setErrors(errors.filter((e) => e !== fieldName));
    }
    if (!errors.includes(fieldName)) {
      return setErrors([...errors, fieldName]);
    }
    return null;
  }

  function onSaveRequest() {
    setLoading(true);
    const data = {
      name, email, message
    };
    createRequest(data)
      .then(() => toast({
        title: t('Thanks for the request', {lng: lang}),
        description: t('Request sent successfully', {lng: lang}),
        status: 'success',
        duration: 5000,
        isClosable: true,
      }))
      .catch(() => toast({
        title: t('Error', {lng: lang}),
        description: t('Try again', {lng: lang}),
        status: 'error',
        duration: 5000,
        isClosable: true,
      }))
      .finally(() => setLoading(false))
  }

  return (
    <Box>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        px={5}
        py={6}
        as={'header'}
        position={'fixed'}
        w={'100%'}
        className={'header'}
        zIndex={20}
      >
        <Flex flexDirection={'column'} alignItems={'flex-end'} flex={1}>
          <Box textAlign={'center'}>
            <Text color={"yellow.400"} mb={-2} fontSize={21} fontWeight={'600'}>Tizim</Text>
            <Text fontSize={21} fontWeight={'600'}>Systems</Text>
          </Box>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'flex-end'} flex={1}>
          <Text
            borderBottomWidth={2}
            borderBottomColor={'yellow.300'}
            mr={10}
            fontSize={20}
            fontWeight={'500'}
            cursor={'pointer'}
            as={'a'}
            href={'tel:+77478024589'}
          >
            +7 747 802 4589
          </Text>
          <Button
            bg={'rgba(0, 0, 0, 0)'}
            borderWidth={1}
            borderColor={'yellow.300'}
            _hover={{
            bg: 'yellow.500',
            borderColor: 'yellow.600'
            }}
            fontWeight={'400'}
            fontSize={20}
            mr={10}
            px={8}
            py={6}
          >
            {t('Contact', {lng: lang})}
          </Button>
          <Text
            onClick={() => setLang('en')}
            mr={5}
            fontSize={20}
            color={lang === 'en' ? 'blackAlpha.500' : "blackAlpha.300"}
            borderBottomColor={'yellow.300'}
            borderBottomWidth={lang === 'en' ? 2 : 0}
            cursor={'pointer'}
          >
            Eng
          </Text>
          <Text
            onClick={() => setLang('ru')}
            mr={5}
            fontSize={20}
            color={lang === 'ru' ? 'blackAlpha.500' : "blackAlpha.300"}
            borderBottomColor={'yellow.300'}
            borderBottomWidth={lang === 'ru' ? 2 : 0}
            cursor={'pointer'}
          >
            Рус
          </Text>
          <Text
            onClick={() => setLang('kz')}
            mr={5}
            fontSize={20}
            color={lang === 'kz' ? 'blackAlpha.500' : "blackAlpha.300"}
            borderBottomColor={'yellow.300'}
            borderBottomWidth={lang === 'kz' ? 2 : 0}
            cursor={'pointer'}
          >
            Қаз
          </Text>
        </Flex>
      </Flex>
      <Flex
        bg={'red.300'}
        h={1200}
        backgroundImage={headerImage}
        backgroundSize={'cover'}
        alignItems={'center'}
        pt={200}
        flexDirection={'column'}
      >
        <Heading fontSize={72} mb={200}>
          Tizim Systems
        </Heading>
        <Text fontSize={36} letterSpacing={8}>
          {t('Development of mobile applications and websites', {lng: lang})}
        </Text>
      </Flex>
      <Box mt={40}>
        <Heading as={Center} fontSize={42}>{t('Services', {lng: lang})}</Heading>
        <Flex px={'70px'} mt={40} justifyContent={'center'}>
          <Box mr={40}>
            {services.map((s) => {
              return (
                <Text
                  key={s.title}
                  borderBottomWidth={selectedService.title === s.title ? 3 : 0}
                  color={selectedService.title === s.title ? 'yellow.400' : 'blackAlpha.600'}
                  borderBottomColor={'yellow.400'}
                  fontSize={38}
                  fontWeight={'600'}
                  mb={'50px'}
                  onClick={() => setSelectedService(s)}
                  cursor={'pointer'}
                >
                  {s.title}
                </Text>
              );
            })}
          </Box>
          <Flex flexDirection={'column'} alignItems={'center'} maxW={932} maxH={450}>
            <AnimatePresence mode={'popLayout'} initial={false}>
              <motion.div
                key={selectedService.title}
                initial={{ x: -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Image h={226} src={selectedService.icon} />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode={'popLayout'}>
              <motion.div
                key={selectedService.text}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}>
                <Text fontSize={18} textAlign={'center'}>{selectedService.text}</Text>
              </motion.div>
            </AnimatePresence>
          </Flex>
        </Flex>
      </Box>
      <Box mt={40}>
        <Heading as={Center} fontSize={42}>
          {t('Our clients', {lng: lang})}
        </Heading>
        <Flex alignItems={'center'} justifyContent={'center'} gap={8} pt={20}>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image key={'image 1'} src={tizim} h={'64px'} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image key={'image 2'} src={intech} h={'64px'} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image key={'image 3'} src={english} h={'64px'} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <Image key={'image 4'} src={icar} h={'64px'} />
          </motion.div>
        </Flex>
      </Box>
      <Box mt={40} bg={'gray.800'} py={20}>
        <Heading as={Center} fontSize={42} color={'white'}>
          {t('Portfolio', {lng: lang})}
        </Heading>
        <Flex justifyContent={'center'} pt={'40px'} gap={10}>
          <Box>
            <Image src={tizimScreen} h={500} borderRadius={20} />
            <Text textAlign={'center'} color={'white'} fontSize={32} fontWeight={'600'}>Frau Mebel</Text>
          </Box>
          <Box>
            <Image src={intechScreen} h={500} borderRadius={20} />
            <Text textAlign={'center'} color={'white'} fontSize={32} fontWeight={'600'}>Intech</Text>
          </Box>
          <Box>
            <Image src={englishScreen} h={500} borderRadius={20} />
            <Text textAlign={'center'} color={'white'} fontSize={32} fontWeight={'600'}>The Donator of Light</Text>
          </Box>
        </Flex>
      </Box>
      <Box mt={40}>
        <Heading as={Center} fontSize={42}>
          {t('About us', {lng: lang})}
        </Heading>
        <Flex justifyContent={'center'} my={20}>
          <Text
            transform={'rotate(-90deg);'}
            fontSize={112}
            fontWeight={'900'}
            color={'yellow.400'}
            borderBottomColor={'yellow.400'}
            borderBottomWidth={2}
            lineHeight={'90px'}
          >
            15
          </Text>
          <Box ml={15}>
            <Text fontSize={32} fontWeight={'900'}>{t('professionals', {lng: lang})}</Text>
            <Text fontSize={16}>
              {t('professionals text', {lng: lang})}
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent={'center'} mb={20}>
          <Text
            fontSize={112}
            fontWeight={'900'}
            color={'yellow.400'}
            borderBottomColor={'yellow.400'}
            borderBottomWidth={2}
            lineHeight={'90px'}
          >
            5
          </Text>
          <Box ml={15}>
            <Text fontSize={32} fontWeight={'900'}>{t('countries', {lng: lang})}</Text>
            <Text fontSize={16}>
              {t('countries text', {lng: lang})}
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent={'center'}>
          <Text
            transform={'rotate(-90deg);'}
            fontSize={112}
            fontWeight={'900'}
            color={'yellow.400'}
            borderBottomColor={'yellow.400'}
            borderBottomWidth={2}
            lineHeight={'90px'}
          >
            15
          </Text>
          <Box ml={15}>
            <Text fontSize={32} fontWeight={'900'}>{t('projects', {lng: lang})}</Text>
            <Text fontSize={16}>
              {t('projects text 1', {lng: lang})}
            </Text>
            <Text fontSize={16}>
              {t('projects text 2', {lng: lang})}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mt={40}>
        <Heading as={Center} fontSize={42}>
          {t('Fields of activity', {lng: lang})}
        </Heading>
        <Flex justifyContent={'center'}>
          <Flex h={300} fontSize={32} fontWeight={'600'} flex={1} _hover={{bg: 'red.300'}} justifyContent={'center'} alignItems={'flex-end'}>
            {t('Mobile Development', {lng: lang})}
          </Flex>
          <Flex h={300} fontSize={32} fontWeight={'600'} flex={1} _hover={{bg: 'green.300'}} justifyContent={'center'} alignItems={'flex-end'}>
            {t('Web Development', {lng: lang})}
          </Flex>
          <Flex h={300} fontSize={32} fontWeight={'600'} flex={1} _hover={{bg: 'blue.300'}} justifyContent={'center'} alignItems={'flex-end'}>
            {t('Manufacturing Automation', {lng: lang})}
          </Flex>
        </Flex>
      </Box>
      <Box mt={40} pt={20} bg={'gray.800'}>
        <Heading as={Center} fontSize={42} color={'white'}>
          {t('Technologies', {lng: lang})}
        </Heading>
        <Flex mt={20} justifyContent={'center'} gap={20}>
          <Flex flexDirection={'column'} bg={'gray.700'} minW={20} alignItems={'center'} p={3}>
            <Image h={10} src={reactIcon} />
            <Text color={'white'} mt={2} fontSize={14}>React JS</Text>
          </Flex>
          <Flex flexDirection={'column'} bg={'gray.700'} minW={20} alignItems={'center'} p={3}>
            <Image w={10} h={10} src={typescriptIcon} />
            <Text color={'white'} mt={2} fontSize={14}>Typescript</Text>
          </Flex>
          <Flex flexDirection={'column'} bg={'gray.700'} minW={20} alignItems={'center'} p={3}>
            <Image w={10} h={10} src={javascriptIcon} />
            <Text color={'white'} mt={2} fontSize={14}>Javascript</Text>
          </Flex>
          <Flex flexDirection={'column'} bg={'gray.700'} minW={20} alignItems={'center'} p={3}>
            <Image w={10} h={10} src={reduxIcon} />
            <Text color={'white'} mt={2} fontSize={14}>Redux</Text>
          </Flex>
          <Flex flexDirection={'column'} bg={'gray.700'} minW={20} alignItems={'center'} p={3}>
            <Image h={10} src={figmaIcon} />
            <Text color={'white'} mt={2} fontSize={14}>Figma</Text>
          </Flex>
          <Flex flexDirection={'column'} bg={'gray.700'} minW={20} alignItems={'center'} py={3}>
            <Image w={10} h={10} src={googleCloudIcon} />
            <Text color={'white'} mt={2} fontSize={14}>Google Cloud</Text>
          </Flex>
        </Flex>
      </Box>
      <Flex flexDirection={'column'} py={'600px'} bg={'gray.800'} alignItems={'center'} px={'70px'}>
        <Heading as={Center} fontSize={42} color={'white'}>
          {t('HOW CAN WE HELP YOU?', {lng: lang})}
        </Heading>
        <Box mb={10} mt={10}>
          <Text color={'gray.300'} fontWeight={'700'} fontSize={26}>{t('Your name', {lng: lang})}</Text>
          <Input
            value={name}
            onChange={(e) => onChangeField('name', setName, e.target.value)}
            onBlur={(e) => onBlurField('name', e.target.value)}
            variant={'unstyled'}
            w={'600px'}
            color={'white'}
            fontSize={40}
            borderBottomWidth={1}
            borderBottomColor={errors.includes('name') ? 'red.500' : 'yellow.300'}
            rounded={'none'}
          />
          {errors.includes('name') && (
            <Text color={'red.500'} fontSize={21} mt={1}>{t('Required field', {lng: lang})}</Text>
          )}
        </Box>
        <Box mb={10}>
          <Text color={'gray.300'} fontWeight={'700'} fontSize={26}>E-mail *</Text>
          <Input
            value={email}
            onChange={(e) => onChangeField('email', setEmail, e.target.value)}
            onBlur={(e) => onBlurField('email', e.target.value)}
            variant={'unstyled'}
            w={'600px'}
            color={'white'}
            fontSize={40}
            borderBottomWidth={1}
            borderBottomColor={errors.includes('email') ? 'red.500' : 'yellow.300'}
            rounded={'none'}
          />
          {errors.includes('email') && (
            <Text color={'red.500'} fontSize={21} mt={1}>{t('Required field', {lng: lang})}</Text>
          )}
        </Box>
        <Box mb={20}>
          <Text color={'gray.300'} fontWeight={'700'} fontSize={26}>{t('Message', {lng: lang})}</Text>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant={'unstyled'}
            w={'600px'}
            color={'white'}
            fontSize={40}
            borderBottomWidth={1}
            borderBottomColor={'yellow.300'}
            rounded={'none'}
            lineHeight={'48px'}
          />
        </Box>
        <Box w={'600px'}>
          <Button
            isDisabled={!!errors.length || !name || !email || loading}
            bg={'rgba(0, 0, 0, 0)'}
            borderWidth={1}
            color={'white'}
            borderColor={'yellow.300'}
            fontSize={21}
            fontWeight={'400'}
            px={8}
            py={6}
            _hover={{
              bg: 'yellow.500'
            }}
            onClick={onSaveRequest}
          >
            {loading ? <Spinner /> : t('Leave a request', {lng: lang})}
          </Button>
        </Box>
      </Flex>
      <Flex justifyContent={'center'} bg={'gray.800'} px={'70px'} py={20}>
        <Flex justifyContent={'space-between'} w={'1200px'}>
          <Flex flex={1} h={'100px'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'}>
            <Flex gap={4}>
              <Text
                borderBottomWidth={2}
                borderBottomColor={'yellow.500'}
                mr={10}
                fontSize={20}
                fontWeight={'500'}
                color={'white'}
                _hover={{
                  borderBottomWidth: 6
                }}
                cursor={'pointer'}
                as={'a'}
                href={'tel:+77478024589'}
              >
                +7 747 802 4589
              </Text>
              <Text
                borderBottomWidth={2}
                borderBottomColor={'yellow.500'}
                mr={10}
                fontSize={20}
                fontWeight={'500'}
                color={'white'}
                _hover={{
                  borderBottomWidth: 6
                }}
                cursor={'pointer'}
                as={'a'}
                href={'mailto: amergalyyernar@gmail.com'}
              >
                amergalyyernar@gmail.com
              </Text>
              <Box as={'a'} href={'https://api.whatsapp.com/send?phone=77478024589'}>
                <Image src={whatsappIcon} w={'36px'} cursor={'pointer'} />
              </Box>
            </Flex>
            <Text color={'gray.400'} fontSize={18}>© ИП "Tizim Systems", 2020-2023</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default HomeScreen;
