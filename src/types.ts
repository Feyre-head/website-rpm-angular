
export type MenuItem = {
    title: string;
    link?: string;
    singleLink?: string;
    icon?: string;
    subMenu?: MenuItem[];
    megaMenu?: MenuItem[];
    image?: string;
    isOpen?: boolean
}

export type BeneficiosType = {
    id: number;
    icon: string;
    title: string;
    description: string;
}

export type CoberturaType = {
    image: string,
    tag: string;
    title: string;
    link?: string
}

export type TeamMemberType = {
    image: string;
    name: string;
    role: string;
    duration?: number
}

export type TestimonialType = {
    rating?: number,
    message: string,
} & TeamMemberType

export type BlogType = {
    id: number;
    image: string;
    authorName?: string;
    date: string;
    title: string;
    description?: string;
    aosClass?: string;
    link?: string;
}

export type FaqType = {
    question: string;
    answer: string;
}