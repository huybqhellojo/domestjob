import { cn } from "@/lib/utils";

export const ZaloIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 262 263" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M131 0C58.649 0 0 58.649 0 131C0 203.351 58.649 262 131 262C203.351 262 262 203.351 262 131C262 58.649 203.351 0 131 0ZM197.838 170.368L173.962 194.244C171.139 197.067 167.247 197.68 163.639 196.223L126.541 182.903C125.129 182.413 123.824 181.711 122.625 180.892L74.832 144.37C71.748 142.029 70.832 137.989 72.585 134.577L84.975 111.758C86.728 108.347 90.722 106.889 94.276 108.347L131.374 121.612C132.786 122.102 134.091 122.748 135.29 123.623L183.083 160.145C186.167 162.486 187.083 166.526 185.33 169.937L197.838 170.368Z" fill="#0068FF"/>
    </svg>
)

export const JpgIcon = ({className, ...props}: React.SVGProps<SVGSVGElement>) => (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="24" height="24" rx="4" fill="#FFDDC2"/>
        <path d="M6 7H7.5L9 11L10.5 7H12V17H10.5V11L9 15H7.5L6 11V17H4.5V7H6Z" fill="#FF6B00"/>
        <path d="M14.5 17C16.9853 17 19 14.9853 19 12.5C19 10.0147 16.9853 8 14.5 8C12.0147 8 10 10.0147 10 12.5C10 14.9853 12.0147 17 14.5 17ZM14.5 15.5C16.1569 15.5 17.5 14.1569 17.5 12.5C17.5 10.8431 16.1569 9.5 14.5 9.5C12.8431 9.5 11.5 10.8431 11.5 12.5C11.5 14.1569 12.8431 15.5 14.5 15.5Z" fill="#FF6B00"/>
        <path d="M20 7H22V15.5H20V7Z" fill="#FF6B00"/>
    </svg>
);

export const PdfIcon = ({className, ...props}: React.SVGProps<SVGSVGElement>) => (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="24" height="24" rx="4" fill="#FFC2C2"/>
        <path d="M6.5 7H11C12.3807 7 13.5 8.11929 13.5 9.5V9.5C13.5 10.8807 12.3807 12 11 12H8V7" stroke="#FF0000" strokeWidth="1.5"/>
        <path d="M8 12V17" stroke="#FF0000" strokeWidth="1.5"/>
        <path d="M15.5 17C17.433 17 19 15.433 19 13.5V10.5C19 8.567 17.433 7 15.5 7C13.567 7 12 8.567 12 10.5V13.5C12 15.433 13.567 17 15.5 17Z" stroke="#FF0000" strokeWidth="1.5"/>
        <path d="M22 7V17H20.5" stroke="#FF0000" strokeWidth="1.5"/>
    </svg>
);

export const VnFlagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props}>
    <rect fill="#da251d" width="900" height="600"/>
    <path fill="#ff0" d="m450 152l-117.6 362.4l307.7-224H142.3l307.7 224z"/>
  </svg>
);

export const JpFlagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props}>
    <rect fill="#fff" width="900" height="600"/>
    <circle fill="#bc002d" cx="450" cy="300" r="180"/>
  </svg>
);

export const EnFlagIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" {...props}>
        <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
        </clipPath>
        <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
    </svg>
);
