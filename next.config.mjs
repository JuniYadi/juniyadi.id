import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below'
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        search: "",
      },
    ],
  },

  async redirects() {
    const staticRoute = [
      {
        source: "/categories",
        destination: "/blog/categories",
        permanent: true,
      },
      {
        source: "/categories/:slug",
        destination: "/blog/categories/:slug",
        permanent: true,
      },
      {
        source: "/tags",
        destination: "/blog/tags",
        permanent: true,
      },
      {
        source: "/tags/:slug",
        destination: "/blog/tags/:slug",
        permanent: true,
      },
    ];

    // old blog route
    const oldBlog = [
      "/apa-itu-docker-serta-kelebihan-dan-kekurangan-docker/",
      "/blog/tutorial-membuat-bot-telegram-membuat-bot-bagian-1-144627/",
      "/cara-install-ssl-gratis-di-nginx-ubuntu-20-04/",
      "/cara-membuat-sms-gateway-dengan-gammu-usb-modem-mysql-database/",
      "/jquery-mengambil-value-tag-href-attribut-lainnya/",
      "/laravel-relationship-memanggil-data-dari-database-lain-berdasarkan-localkey/",
      "/membuat-pull-request-github-dengan-spesifik-commit/",
      "/mengganti-repository-debian-dengan-repository-generator-mirror/",
      "/rekomendasi-software-editor-atau-addons-browser-untuk-programer-front-back-end/",
      "/tui-editor-jquery-ajax-image-upload-to-server/",
      "/tutorial-dasar-menggunakan-framework-laravel/",
      "/tutorial-membuat-bot-telegram-dari-dasar-untuk-pemula/",
    ];

    for (const o of oldBlog) {
      staticRoute.push({
        source: o,
        destination: "/blog" + o,
        permanent: true,
      });
    }

    return staticRoute;
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
