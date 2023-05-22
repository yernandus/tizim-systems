import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {Box, Button, Center, Flex, Heading, Image, Text} from "@chakra-ui/react";
import {AnimatePresence, motion} from "framer-motion";
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

function HomeScreen() {
  const {t} = useTranslation();
  const [lang, setLang] = useState('en');
  const services = [
    {
      icon: gif1,
      text: 'Полностью обеспечиваем вывод продукта на рынок. Уверенно контролируем запуск за счет экспертизы и солидного опыта реализации и публикации продуктов.',
      title: 'Запуск продукта'
    },
    {
      icon: gif2,
      text: 'Создаем современный и продуманный UX-дизайн, основанный на глубоком анализе вашего бизнеса, клиентов и пользователей.',
      title: 'Дизайн продукта',
    },
    {
      icon: gif3,
      text: 'Предлагаем уникальные архитектурные решения в процессе разработки. Используем передовые технологические стеки для реализации веб-сервисов и приложений любого уровня сложности.',
      title: 'Разработка продукта',
    }
  ];
  const [selectedService, setSelectedService] = useState(services[0]);

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
      >
        <Box>
          <Text color={"yellow.400"} mb={-2} fontSize={18} fontWeight={'500'}>Tizim</Text>
          <Text fontSize={18} fontWeight={'500'}>Systems</Text>
        </Box>
        <Flex alignItems={'center'}>
          <Text
            borderBottomWidth={2}
            borderBottomColor={'yellow.300'}
            mr={10}
            fontSize={20}
            fontWeight={'500'}
          >
            +7 747 802 4589
          </Text>
          <Button
            bg={'rgba(255, 255, 255, 0.1)'}
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
        </Flex>
      </Flex>
      <Flex
        bg={'red.300'}
        h={1200}
        backgroundImage={headerImage}
        alignItems={'center'}
        pt={200}
        flexDirection={'column'}
      >
        <Heading fontSize={72} mb={200}>
          Tizim Systems
        </Heading>
        <Text fontSize={36} letterSpacing={8}>
          Разработка мобильных приложении и сайтов
        </Text>
      </Flex>
      <Box mt={40}>
        <Heading as={Center} fontSize={42}>Виды работ</Heading>
        <Flex px={'70px'} mt={40} justifyContent={'center'}>
          <Box mr={40}>
            {services.map((s) => {
              return (
                <Text
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
          Наши партнеры
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
          Портфолио
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
          Факты о нас
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
            <Text fontSize={32} fontWeight={'900'}>профессионалов</Text>
            <Text fontSize={16}>
              талантливые дизайнеры, опытные копирайтеры, сильные программисты, внимательные тестировщики.
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
            <Text fontSize={32} fontWeight={'900'}>стран</Text>
            <Text fontSize={16}>
              используют наши продукты: Казахстан, США, Канада, Австралия, Новая Зеландия.
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
            <Text fontSize={32} fontWeight={'900'}>проектов</Text>
            <Text fontSize={16}>
              выполнены на текущий день в самых различных отраслях:
            </Text>
            <Text fontSize={16}>
              Frau Mebel, Intech, The Donator Of Light, Be Here Now, Duos, Wreno и т.д.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mt={40}>
        <Heading as={Center} fontSize={42}>
          Сфера деятельности
        </Heading>
        <Flex justifyContent={'center'}>
          <Flex h={300} fontSize={32} fontWeight={'600'} flex={1} _hover={{bg: 'red.300'}} justifyContent={'center'} alignItems={'flex-end'}>
            Мобильная Разработка
          </Flex>
          <Flex h={300} fontSize={32} fontWeight={'600'} flex={1} _hover={{bg: 'green.300'}} justifyContent={'center'} alignItems={'flex-end'}>
            Веб разработка
          </Flex>
          <Flex h={300} fontSize={32} fontWeight={'600'} flex={1} _hover={{bg: 'blue.300'}} justifyContent={'center'} alignItems={'flex-end'}>
            Автоматизация производства
          </Flex>
        </Flex>
      </Box>
      <Box mt={40} pt={20} bg={'gray.800'}>
        <Heading as={Center} fontSize={42} color={'white'}>
          Технологии
        </Heading>
        <Flex mt={20}>
          Hello
        </Flex>
      </Box>
    </Box>
  );
}

export default HomeScreen;
