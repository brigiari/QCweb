import { PageTitle } from "@/components/sections/PageTitle";
import { Container } from "@/components/ui/Container";
import { LineButton } from "@/components/ui/LineButton";

export default function NotFound() {
  return (
    <>
      <PageTitle title="Page not found" lede="The page you asked for does not exist or has moved." />
      <Container className="flex justify-center pb-[200px] pt-[80px]">
        <div className="w-[268px]">
          <LineButton href="/">Back to home</LineButton>
        </div>
      </Container>
    </>
  );
}
