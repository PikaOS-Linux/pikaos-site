import defaultImage from './assets/images/default.png';

const CONFIG = {
    name: 'PikaOS',

    origin: 'https://pika-os.com',
    basePathname: '/',
    trailingSlash: false,

    title: 'PikaOS — The cool birb OS',
    description: 'PikaOS is a gaming focused linux distribution focussing on ease of use and high compatability. Using the know how from Nobara combined with a Ubuntu base, PikaOS is almost unrivaled in software compatability.',
    defaultImage: defaultImage,

    defaultTheme: 'dark', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

    language: 'en',
    textDirection: 'ltr',

    dateFormatter: new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
    }),

    googleAnalyticsId: false,
    googleSiteVerificationId: false,

};

export const SITE = {...CONFIG };
export const DATE_FORMATTER = CONFIG.dateFormatter;