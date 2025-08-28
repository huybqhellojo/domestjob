import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatSpecialCondition = (specialConditions: any) => {
  if (typeof specialConditions === "string") {
    specialConditions = specialConditions.split(", ");
  }
  return specialConditions ?? [];
};

export const WEAK_LANGUAGES = ["n4", "n5"];
export const STRONG_LANGUAGES = ["n1", "n2", "n3"];
export const SPECIAL_CONDITION_COLORS = ["#F2B92A", "#19A6DF", "#AFC536"];
export const VISA_COLORS: { [key: string]: string } = {
  "thực tập sinh 3 năm": "#19A6DF",
  "thực tập sinh 1 năm": "#46C2F5",
  "thực tập sinh 3 go": "#0D8DC8",
  "đặc định đầu việt tiếng yếu": "#AFC536",
  "đặc định đầu việt có tiếng": "#9EB524",
  "đặc định đầu nhật tiếng yếu": "#91A621",
  "đặc định đầu nhật có tiếng": "#6F8114",
  "đặc định đi mới": "#CFE64E",
  "kỹ sư đầu việt không tiếng": "#F2B92A",
  "kỹ sư đầu việt tiếng yếu": "#F8B714",
  "kỹ sư đầu việt có tiếng": "#FAB404",
  "kỹ sư đầu nhật không tiếng": "#F2B92A",
  "kỹ sư đầu nhật tiếng yếu": "#D59E16",
  "kỹ sư đầu nhật có tiếng": "#B18208",
  "kỹ sư không tiếng": "#F2B92A",
  "kỹ sư có tiếng": "#FAB404",
  "kỹ sư tiếng yếu": "#F8B714",
};

export function formatGender(input: any) {
  // if (!input?.length) {
  //   return null;
  // }
  // const validKeywords = ["nam", "nữ", "cả nam và nữ", "male", "female", "both", "MALE", "FEMALE", "BOTH"];

  // // Chuyển về chữ thường để so khớp không phân biệt hoa thường
  // const lowerInput = input.toLowerCase();

  // // Tìm tất cả từ hợp lệ có xuất hiện trong input
  // const result = validKeywords.filter(keyword => lowerInput.includes(keyword));

  // return result.join(", "); // hoặc trả về mảng `result` nếu bạn muốn giữ dạng array
  if (input === "MALE") {
    return "Nam";
  } else if (input === "FEMALE") {
    return "Nữ";
  } else if (input === "BOTH") {
    return "Cả nam và nữ";
  } else {
    return "";
  }
}

export const generateBulletJobCrawl = (data: any) => {
  const { visa, job, career, languageLevel, numberRecruits, gender, aiContent, workLocation } = data;
  const rawVisa = getVisaWithLanguage(visa, languageLevel);
  let specialConditions = data.specialConditions;
  specialConditions = formatSpecialCondition(specialConditions);
  const details = [
    rawVisa,
    job ?? career,
    workLocation,
    languageLevel,
    numberRecruits ? `${numberRecruits} ${formatGender(gender)}` : null,
    specialConditions ? specialConditions.join(",") : null,
    aiContent,
  ]
    .filter(Boolean)
    .join(", ");

  return details;
};

export const getVisaWithLanguage = (visa: string, languageLevel: string) => {
  const validVisas = Object.keys(VISA_COLORS);
  visa = visa?.toLowerCase()?.replaceAll("tokutei", "đặc định");
  if (visa === "đi mới" || visa === "thực tập sinh" || !visa?.length) {
    return "Thực tập sinh 3 năm";
  } else if (visa === "đặc định") {
    return "Đặc định đi mới";
  } else if (visa === "đặc định có tiếng" || visa === "đặc định") {
    visa = "Đặc định đầu việt";
  } else if (visa === "đặc định không tiếng") {
    return "Đặc định đầu việt tiếng yếu";
  } else if (visa === "kỹ sư không tiếng") {
    return "Kỹ sư đầu việt tiếng yếu";
  } else if (visa === "kỹ sư có tiếng") {
    visa = "Kỹ sư đầu việt";
  }
  if (validVisas.indexOf(visa) === -1) {
    languageLevel = languageLevel?.toLowerCase();
    if (!languageLevel?.length && visa.indexOf("kỹ sư") > -1) {
      visa += " không tiếng";
    } else if (STRONG_LANGUAGES.findIndex((item) => languageLevel?.indexOf(item) > -1) > -1) {
      visa += " có tiếng";
    } else {
      visa += " tiếng yếu";
    }
  }
  // if (validVisas.indexOf(visa) === -1) {
  //   return "thực tập sinh 3 năm";
  // }
  return visa;
};