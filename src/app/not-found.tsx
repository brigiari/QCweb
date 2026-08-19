import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function NotFound() {
  return (
    <section>
      <Container className="py-24 sm:py-32">
        <SectionHeading
          as="h1"
          eyebrow="404"
          title="Page not found"
          lede="The page you asked for does not exist or has moved."
        />
        <div className="mt-8">
          <Button href="/" variant="secondary">
            Back to the home page
          </Button>
        </div>
      </Container>
    </section>
  );
}
