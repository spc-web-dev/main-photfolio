import ProductFooter from "@/components/dashboard/products/pro-footer"


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-10">
        <>{children}</>
        <ProductFooter />
    </div>
  )
}

export default Layout