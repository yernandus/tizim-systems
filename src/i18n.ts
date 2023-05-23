import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
  en: {
    translation: {
      "Contact": "Contact",
      "Development of mobile applications and websites": "Development of mobile applications and websites",
      "Services": "Services",
      "Product Launch": "Product Launch",
      "Product Engineering": "Product Engineering",
      "Product Design": "Product Design",
      "Product Launch Text": "We get the product ready to enter the market. The expertise of our company is based upon realizing and publishing a number of products. We know how to do it right and are ready to help you.",
      "Product Engineering Text": "Besides code development, we also offer unique architectural decisions. We utilize the newest technology stacks to realize the ideal web and app products.\n",
      "Product Design Text": "Based on collected and processed data we create a modern, elaborate UX-design, which will be based upon the pragmatic analysis of your business, clients and users.\n",
      "Our clients": "Our clients",
      "Portfolio": "Portfolio",
      "About us": "About us",
      "professionals": "professionals",
      "professionals text": "talented designers, experienced copywriters, capable programmers, careful testers",
      "countries": "countries",
      "countries text": "our products are used in: Kazakhstan, USA, Canada, Australia, New Zealand.",
      "projects": "projects",
      "projects text 1": "to this day projects have been developed in various different industries, such as",
      "projects text 2": "Frau Mebel, Intech, The Donator Of Light, Be Here Now, Duos, Wreno",
      "Fields of activity": "Fields of activity",
      "Mobile Development": "Mobile Development",
      "Web Development": "Web Development",
      "Manufacturing Automation": "Manufacturing Automation",
      "Technologies": "Technologies",
      "HOW CAN WE HELP YOU?": "HOW CAN WE HELP YOU?",
      "Your name": "Your name *",
      "Message": "Message",
      "Leave a request": "Leave a request",
      "Required field": "Required field *",
      "Thanks for the request": "Thanks for the request",
      "Request sent successfully": "Request sent successfully",
      "Error": "Error",
      "Try again": "Try again",
    }
  },
  ru: {
    translation: {
      "Contact": "Связаться",
      "Development of mobile applications and websites": "Разработка мобильных приложении и сайтов",
      "Services": "Виды работ",
      "Product Launch": "Запуск продукта",
      "Product Engineering": "Разработка продукта",
      "Product Design": "Дизайн продукта",
      "Product Launch Text": "Полностью обеспечиваем вывод продукта на рынок. Уверенно контролируем запуск за счет экспертизы и солидного опыта реализации и публикации продуктов.",
      "Product Engineering Text": "Создаем современный и продуманный UX-дизайн, основанный на глубоком анализе вашего бизнеса, клиентов и пользователей.",
      "Product Design Text": "Предлагаем уникальные архитектурные решения в процессе разработки. Используем передовые технологические стеки для реализации веб-сервисов и приложений любого уровня сложности.",
      "Our clients": "Наши клиенты",
      "Portfolio": "Портфолио",
      "About us": "Факты о нас",
      "professionals": "профессионалов",
      "professionals text": "талантливые дизайнеры, опытные копирайтеры, сильные программисты, внимательные тестировщики.",
      "countries": "стран",
      "countries text": "используют наши продукты: Казахстан, США, Канада, Австралия, Новая Зеландия.",
      "projects": "проектов",
      "projects text 1": "выполнены на текущий день в самых различных отраслях:",
      "projects text 2": "Frau Mebel, Intech, The Donator Of Light, Be Here Now, Duos, Wreno и т.д.",
      "Fields of activity": "Сфера деятельности",
      "Mobile Development": "Мобильная Разработка",
      "Web Development": "Веб Разработка",
      "Manufacturing Automation": "Автоматизация производства",
      "Technologies": "Технологии",
      "HOW CAN WE HELP YOU?": "ЧЕМ МЫ МОЖЕМ ВАМ ПОМОЧЬ?",
      "Your name": "Имя",
      "Message": "Сообщение",
      "Leave a request": "Оставить заявку",
      "Required field": "Обязательное поле *",
      "Thanks for the request": "Спасибо за заявку",
      "Request sent successfully": "Заявка успешно отправлено",
      "Error": "Ошибка",
      "Try again": "Повторите попытку",
    }
  },
  kz: {
    translation: {
      "Contact": "Байланысу",
      "Development of mobile applications and websites": "Мобильді қосымшалар мен веб-сайттарды әзірлеу",
      "Services": "Қызымет түрлері",
      "Product Launch": "Өнімді іске қосу",
      "Product Engineering": "Өнімді әзірлеу",
      "Product Design": "Өнім дизайны",
      "Product Launch Text": "Біз өнімді нарыққа шығаруды толық қамтамасыз етеміз. Біз өнімдерді енгізу мен жариялаудағы үлкен тәжірибенің арқасында ғаламторға жариялауға сенімді түрде басқарамыз.",
      "Product Engineering Text": "Біз сіздің бизнесіңізді, тұтынушыларыңызды және пайдаланушыларыңызды терең талдау негізінде заманауи және ойластырылған UX дизайнын жасаймыз.",
      "Product Design Text": "Біз әзірлеу процесінде бірегей архитектуралық шешімдерді ұсынамыз. Біз веб-қызметтерді және кез келген күрделіліктегі қосымшаларды енгізу үшін озық технологиялық стектерді қолданамыз.",
      "Our clients": "Біздің клиенттер",
      "Portfolio": "Портфолио",
      "About us": "Біз туралы фактілер",
      "professionals": "кәсіпқойлар",
      "professionals text": "талантты дизайнерлер, тәжірибелі копирайтерлер, күшті бағдарламашылар, мұқият тестерлер.",
      "countries": "елдер",
      "countries text": "біздің өнімдерді пайдалынады: Қазақстан, АҚШ, Канада, Австралия, Жаңа Зеландия.",
      "projects": "жобалар",
      "projects text 1": "бүгінгі күнге дейін әртүрлі салаларда орындалды:",
      "projects text 2": "Frau Mebel, Intech, The Donator Of Light, Be Here Now, Duos, Wreno және т.б.",
      "Fields of activity": "Қызмет салалары",
      "Mobile Development": "Мобильді қосымша әзірлеу",
      "Web Development": "Веб-қосымша әзірлеу",
      "Manufacturing Automation": "Өндірісті автоматтандыру",
      "Technologies": "Технологиялар",
      "HOW CAN WE HELP YOU?": "БІЗ СІЗГЕ ҚАЛАЙ КӨМЕК БЕРЕІМІЗ?",
      "Your name": "Сіздің атыңыз",
      "Message": "Хабар",
      "Leave a request": "Өтінішті жіберу",
      "Required field": "Міндетті енгізу өрісі *",
      "Thanks for the request": "Өтінім жібергенінізге үшін рахмет",
      "Request sent successfully": "Өтінім сәтті жіберілді",
      "Error": "Қате",
      "Try again": "Қайтадан байқап көріңіз",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
