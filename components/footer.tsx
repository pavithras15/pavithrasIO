export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Pavithra Saravana Moorthy. All rights reserved.
        </p>
        <p className="text-center text-sm text-muted-foreground">Developer & Data Analyst</p>
      </div>
    </footer>
  )
}
