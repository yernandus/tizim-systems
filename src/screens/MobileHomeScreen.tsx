import React, {useState} from 'react';
import {Box, Button, Center, Flex, Heading, Image, Input, Spinner, Text, Textarea, useToast} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import {createRequest} from "../services/contactService";
// @ts-ignore
import gif1 from "../assets/Mobileapp.gif";
// @ts-ignore
import gif2 from "../assets/mobile_development2.gif";
// @ts-ignore
import gif3 from "../assets/phpdevelopment.gif";
// @ts-ignore
import headerImage from "../assets/260164.webp";
// @ts-ignore
import tizim from "../assets/tizim.png";
// @ts-ignore
import intech from "../assets/intech.png";
// @ts-ignore
import english from "../assets/The_Donator_of_Light.png";
// @ts-ignore
import icar from "../assets/fullLogo.png";
// @ts-ignore
import tizimScreen from "../assets/tizim_screen.png";
// @ts-ignore
import intechScreen from "../assets/intech_screen.png";
// @ts-ignore
import englishScreen from "../assets/english.png";
// @ts-ignore
import reactIcon from "../assets/ReactIcon.png";
// @ts-ignore
import typescriptIcon from "../assets/typescript.png";
// @ts-ignore
import javascriptIcon from "../assets/javascript.png";
// @ts-ignore
import reduxIcon from "../assets/redux.png";
// @ts-ignore
import figmaIcon from "../assets/figma.png";
// @ts-ignore
import whatsappIcon from "../assets/whatsapp.png";

function MobileHomeScreen() {
  const {t} = useTranslation();
  const toast = useToast();
  const [lang, setLang] = useState('en');
  const [errors, setErrors] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
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

  function onSaveRequest() {
    const data = {
      name, email, message
    };
    setLoading(true);
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

  function onBlurField(fieldName: string, value: string) {
    if (value) {
      return setErrors(errors.filter((e) => e !== fieldName));
    }
    if (!errors.includes(fieldName)) {
      return setErrors([...errors, fieldName]);
    }
    return null;
  }

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
        <Flex flexDirection={'column'} flex={1}>
          <Text color={"yellow.400"} mb={-2} fontSize={21} fontWeight={'600'}>Tizim</Text>
          <Text fontSize={21} fontWeight={'600'}>Systems</Text>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'flex-end'} flex={1}>
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
        h={750}
        backgroundImage={headerImage}
        backgroundSize={'cover'}
        alignItems={'center'}
        pt={200}
        flexDirection={'column'}
        px={3}
      >
        <Heading fontSize={30} mb={'80px'}>
          Tizim Systems
        </Heading>
        <Text fontSize={20} letterSpacing={4} textAlign={'center'}>
          {t('Development of mobile applications and websites', {lng: lang})}
        </Text>
      </Flex>
      <Box mt={10} px={3}>
        <Heading fontSize={31} mb={10}>
          {t('Services', {lng: lang})}
        </Heading>
        <Box>
          {services.map((s) => {
            return (
              <Box mb={10}>
                <Image h={154} src={s.icon} mb={3} />
                <Text
                  key={s.title}
                  borderBottomWidth={2}
                  color={'blackAlpha.600'}
                  borderBottomColor={'yellow.400'}
                  fontSize={20}
                  fontWeight={'600'}
                  cursor={'pointer'}
                  mb={4}
                >
                  {s.title}
                </Text>
                <Text>
                  {s.text}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box mt={10} px={3}>
        <Heading fontSize={31}>
          {t('Our clients', {lng: lang})}
        </Heading>
        <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={5} pt={10}>
          <Image key={'image 1'} src={tizim} h={'86px'} />
          <Image key={'image 2'} src={intech} h={'86px'} />
          <Image key={'image 3'} src={english} h={'86px'} />
          <Image key={'image 4'} src={icar} h={'86px'} />
        </Flex>
      </Box>
      <Box mt={40} bg={'gray.800'} py={10} px={3}>
        <Heading as={Center} fontSize={31} color={'white'} mb={10}>
          {t('Portfolio', {lng: lang})}
        </Heading>
        <Box pt={'40px'} gap={10}>
          <Box>
            <Image src={tizimScreen} h={428} borderRadius={20} />
            <Text textAlign={'center'} color={'white'} fontSize={36} fontWeight={'600'} mt={3} mb={6}>
              Frau Mebel
            </Text>
          </Box>
          <Box>
            <Image src={intechScreen} h={428} borderRadius={20} />
            <Text textAlign={'center'} color={'white'} fontSize={36} fontWeight={'600'} mt={3} mb={6}>
              Intech
            </Text>
          </Box>
          <Box>
            <Image src={englishScreen} h={428} borderRadius={20} />
            <Text textAlign={'center'} color={'white'} fontSize={36} fontWeight={'600'} mt={3} mb={6}>
              The Donator of Light
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt={40} px={3}>
        <Heading fontSize={31} mb={10}>
          {t('About us', {lng: lang})}
        </Heading>
        <Box mb={20}>
          <Text
            fontSize={96}
            fontWeight={'900'}
            color={'yellow.400'}
            borderBottomColor={'yellow.400'}
            borderBottomWidth={2}
            lineHeight={'72px'}
            maxW={'118px'}
          >
            15
          </Text>
          <Text fontSize={30} fontWeight={'900'}>{t('professionals', {lng: lang})}</Text>
          <Text fontSize={16}>
            {t('professionals text', {lng: lang})}
          </Text>
        </Box>
        <Box mb={20}>
          <Text
            fontSize={96}
            fontWeight={'900'}
            color={'yellow.400'}
            borderBottomColor={'yellow.400'}
            borderBottomWidth={2}
            lineHeight={'72px'}
            maxW={'118px'}
          >
            5
          </Text>
          <Text fontSize={32} fontWeight={'900'}>{t('countries', {lng: lang})}</Text>
          <Text fontSize={16}>
            {t('countries text', {lng: lang})}
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={96}
            fontWeight={'900'}
            color={'yellow.400'}
            borderBottomColor={'yellow.400'}
            borderBottomWidth={2}
            lineHeight={'72px'}
            maxW={'118px'}
          >
            15
          </Text>
          <Text fontSize={32} fontWeight={'900'}>{t('projects', {lng: lang})}</Text>
          <Text fontSize={16}>
            {t('projects text 1', {lng: lang})}
          </Text>
          <Text fontSize={16}>
            {t('projects text 2', {lng: lang})}
          </Text>
        </Box>
      </Box>
      <Box mt={10}>
        <Heading fontSize={31} mb={10}>
          {t('Fields of activity', {lng: lang})}
        </Heading>
        <Box>
          <Flex h={300} fontSize={24} fontWeight={'600'} flex={1} bg={'red.300'} alignItems={'flex-end'} p={4}>
            {t('Mobile Development', {lng: lang})}
          </Flex>
          <Flex h={300} fontSize={24} fontWeight={'600'} flex={1} bg={'green.300'} alignItems={'flex-end'} p={4}>
            {t('Web Development', {lng: lang})}
          </Flex>
          <Flex h={300} fontSize={24} fontWeight={'600'} flex={1} bg={'blue.300'} alignItems={'flex-end'} p={4}>
            {t('Manufacturing Automation', {lng: lang})}
          </Flex>
        </Box>
      </Box>
      <Box py={20} bg={'gray.800'} px={3}>
        <Heading fontSize={31} color={'white'}>
          {t('Technologies', {lng: lang})}
        </Heading>
        <Box>
          <Flex mt={20} justifyContent={'center'} gap={14}>
            <Flex flexDirection={'column'} bg={'gray.700'} minW={14} alignItems={'center'} p={3}>
              <Image h={7} src={reactIcon} />
            </Flex>
            <Flex flexDirection={'column'} bg={'gray.700'} minW={14} alignItems={'center'} p={3}>
              <Image w={7} h={7} src={typescriptIcon} />
            </Flex>
            <Flex flexDirection={'column'} bg={'gray.700'} minW={14} alignItems={'center'} p={3}>
              <Image w={7} h={7} src={javascriptIcon} />
            </Flex>
          </Flex>
          <Flex justifyContent={'center'} gap={14}>
            <Flex flexDirection={'column'} bg={'gray.700'} minW={14} alignItems={'center'} p={3}>
              <Image w={7} h={7} src={reduxIcon} />
            </Flex>
            <Flex flexDirection={'column'} bg={'gray.700'} minW={14} alignItems={'center'} p={3}>
              <Image h={7} src={figmaIcon} />
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Flex flexDirection={'column'} py={'100px'} bg={'gray.800'} alignItems={'center'} px={3}>
        <Heading as={Center} fontSize={24} color={'white'}>
          {t('HOW CAN WE HELP YOU?', {lng: lang})}
        </Heading>
        <Box mb={10} mt={10}>
          <Text color={'gray.300'} fontWeight={'700'} fontSize={24}>
            {t('Your name', {lng: lang})}
          </Text>
          <Input
            value={name}
            onChange={(e) => onChangeField('name', setName, e.target.value)}
            onBlur={(e) => onBlurField('name', e.target.value)}
            variant={'unstyled'}
            color={'white'}
            fontSize={40}
            borderBottomWidth={1}
            borderBottomColor={errors.includes('name') ? 'red.500' : 'yellow.300'}
            rounded={'none'}
          />
          {errors.includes('name') && (
            <Text color={'red.500'} fontSize={21} mt={1}>
              {t('Required field', {lng: lang})}
            </Text>
          )}
        </Box>
        <Box mb={10}>
          <Text color={'gray.300'} fontWeight={'700'} fontSize={24}>
            E-mail *
          </Text>
          <Input
            value={email}
            onChange={(e) => onChangeField('email', setEmail, e.target.value)}
            onBlur={(e) => onBlurField('email', e.target.value)}
            variant={'unstyled'}
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
          <Text color={'gray.300'} fontWeight={'700'} fontSize={26}>
            {t('Message', {lng: lang})}
          </Text>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant={'unstyled'}
            color={'white'}
            fontSize={40}
            borderBottomWidth={1}
            borderBottomColor={'yellow.300'}
            rounded={'none'}
            lineHeight={'48px'}
          />
        </Box>
        <Flex justifyContent={'flex-start'} w={'full'}>
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
        </Flex>
      </Flex>
      <Box bg={'gray.800'} py={10} px={3}>
        <Flex justifyContent={'space-between'}>
          <Text
            borderBottomWidth={2}
            borderBottomColor={'yellow.500'}
            fontSize={15}
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
            fontSize={15}
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
        </Flex>
        <Flex justifyContent={'space-between'} mt={10}>
          <Flex flex={1} h={'100px'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'}>
            <Flex gap={4}>
              <Box as={'a'} href={'https://api.whatsapp.com/send?phone=77478024589'}>
                <Image src={whatsappIcon} w={'36px'} cursor={'pointer'} />
              </Box>
            </Flex>
            <Text color={'gray.400'} fontSize={15}>
              © ИП "Tizim Systems", 2020-2023
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default MobileHomeScreen;
