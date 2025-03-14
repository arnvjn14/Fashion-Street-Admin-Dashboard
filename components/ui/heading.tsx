interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
      <p className="text-sm text-muted-foreground ml-1">{description}</p>
    </div>
  );
};
