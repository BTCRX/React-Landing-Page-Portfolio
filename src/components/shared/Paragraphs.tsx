interface ParagraphsProps { 
    children: React.ReactNode;
    className?: string;
}

export const Paragraphs = ({children , className = ""} : ParagraphsProps) => {
    return (
        <p className={`text-heading-3 md:text-lg1 ${className}`}> {children} </p>
    );
};