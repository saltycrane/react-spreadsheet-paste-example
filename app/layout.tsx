import "./global-style.css";

type TProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: TProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
