import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { IoIosFlower } from "react-icons/io";
// import { FaRegFaceGrinStars } from "react-icons/fa6";
// import { GiChemicalTank } from "react-icons/gi"
import imageCollection from "../images/images";
export const categories = [
  "Show All",
  "Chronic Care Management",
  "Digestive Health",
  "Mood Balance",
  "Immunization",
];

export const items = [
  {
    id: 1,
    category: "Chronic Care Management",
    title: "Rheumatic Care Solutions",
    image: imageCollection.rheumatic,
    downIcon: FaChevronDown,
    upIcon: FaChevronUp,
    description:
    "Our rheumatic care solutions focus on providing effective relief and long-term management for conditions like arthritis and other joint disorders, using natural treatments that support the body’s healing process and enhance mobility.",
  },
  {
    id: 2,
    category: "Chronic Care Management",
    title: "Cancer Care Solutions",
    image: imageCollection.cancerPatientImage,
    downIcon: FaChevronDown,
    upIcon: FaChevronUp,
    description:
      "Our holistic cancer care focuses on providing comprehensive support, combining advanced treatments with natural therapies to promote healing and improve the quality of life for patients.",
  },
  {
    id: 3,
    category: "Chronic Care Management",
    title: "Heart care Solutions",
    image: imageCollection.cardiologist,
    downIcon: FaChevronDown,
    upIcon: FaChevronUp,
    description:
      "Our heart care solutions focus on preventing, managing, and treating heart conditions through a combination of natural therapies and lifestyle interventions, ensuring a healthier and more fulfilling life.",
  },
  {
    id: 4,
    category: "Digestive Health",
    title: "Diet and Excercise",
    image: imageCollection.diet,
    downIcon: FaChevronDown,
    upIcon: FaChevronUp,
    description:
      "The most natural way to peel the old skin and let a young new skin grow",
  },
  {
    id: 5,
    category: "Digestive Health",
    title: "Injury Rehabilitation",
    image: imageCollection.injury,
    downIcon: FaChevronDown,
    upIcon: FaChevronUp,
    description:
      "The most natural way to peel the old skin and let a young new skin grow",
  },
  {
    id: 6,
    category: "Digestive Health",
    title: "Aquatic Therapy",
    image: imageCollection.aquatic,
    downIcon: FaChevronDown,
    upIcon: FaChevronUp,
    description:
      "The most natural way to peel the old skin and let a young new skin grow",
  },
  {
    id: 7,
    category: "Mood Balance",
    title: "Clinical Hypnotherapy",
    image: imageCollection.clinical,
    downIcon: FaChevronDown,
    upIcon: FaChevronUp,
    description:
      "The most natural way to peel the old skin and let a young new skin grow",
  },
  {
    id: 8,
    category: "Mood Balance",
    title: "Massage Therapy",
    image: imageCollection.massage,
    downIcon: FaChevronDown,
    upIcon: FaChevronUp,
    description:
      "The most natural way to peel the old skin and let a young new skin grow",
  },
  {
    id: 9,
    category: "Mood Balance",
    title: "Reiki Treatment",
    image: imageCollection.reiki,
    downIcon: FaChevronDown,
    upIcon: FaChevronUp,
    description:
      "The most natural way to peel the old skin and let a young new skin grow",
  },
  {
    id: 10,
    category: "Immunization",
    title: "Acupuncture",
    image: imageCollection.acupuncture,
    downIcon: FaChevronDown,
    upIcon: FaChevronUp,
    description:
      "The most natural way to peel the old skin and let a young new skin grow",
  },
  {
    id: 11,
    category: "Immunization",
    title: "Cupping Therapy",
    image: imageCollection.cupping,
    downIcon: FaChevronDown,
    upIcon: FaChevronUp,
    description:
      "The most natural way to peel the old skin and let a young new skin grow",
  },
  {
    id: 12,
    category: "Immunization",
    title: "21 Day Metabolic Cleanse",
    image: imageCollection.days,
    downIcon: FaChevronDown,
    upIcon: FaChevronUp,
    description:
      "The most natural way to peel the old skin and let a young new skin grow",
  },
];

export const treatmentData = [
  {
    id: 1,
    title: "Acupuncture",
    description:
      "Using acupuncture we balance your energy letting your body to treat itself",
  },
  {
    id: 2,
    title: "Hypnotherapy",
    description: "The real taste of hypnotherapy performed by Dr. S.P.Baranwal",
  },
  {
    id: 3,
    title: "Homeopathy",
    description: "100% Natural and 100% Organic Medicine",
  },
  {
    id: 4,
    title: "Reiki",
    description: "Open your chakras and talk to universe",
  }
];

export const patients = [
  {
    id: 1,
    name: "John Doe",
    image: imageCollection.men1,
    review: "The doctor was kind, helpful, and very professional indeed.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: imageCollection.men2,
    review: "Really appreciated the care and attention received during visit.",
  },
  {
    id: 3,
    name: "Tom Brown",
    image: imageCollection.men3,
    review: "Highly recommend, he addressed all my concerns very well.",
  },
  {
    id: 4,
    name: "Sara Wilson",
    image: imageCollection.girl1,
    review: "The doctor explained everything clearly and listened to me.",
  },
  {
    id: 5,
    name: "Emily Davis",
    image: imageCollection.girl2,
    review:
      "Comfortable and reassuring experience, doctor showed great expertise here.",
  },
  {
    id: 6,
    name: "Jessica Lee",
    image: imageCollection.girl3,
    review: "Thorough examination and friendly approach, made me feel relaxed.",
  },
  {
    id: 7,
    name: "Chris Green",
    image: imageCollection.men4,
    review: "Doctor gave great advice and was attentive to details.",
  },
  {
    id: 8,
    name: "Jessica Taylor",
    image: imageCollection.girl4,
    review:
      "Very satisfied with the consultation, highly competent and caring.",
  },
  {
    id: 9,
    name: "David Thomas",
    image: imageCollection.men5,
    review: "Caring and patient-focused, highly recommend this amazing doctor.",
  },
];

export const diseases = [
  {
    id: 1,
    Icon: imageCollection.stomach,
    name: "Internal Medicine Diseases",
  },
  {
    id: 2,
    Icon: imageCollection.oncology,
    name: "Cancer Diseases",
  },
  {
    id: 3,
    Icon: imageCollection.pain,
    name: "Rheumatic Diseases",
  },
  {
    id: 4,
    Icon: imageCollection.addiction,
    name: "Addiction Disorders",
  },
  {
    id: 5,
    Icon: imageCollection.generalHealth,
    name: "General Health Conditions",
  },
  {
    id: 6,
    Icon: imageCollection.heart,
    name: "Heart Diseases",
  }
]