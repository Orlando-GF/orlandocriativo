import type { MetadataRoute } from "next";

export const dynamic = 'force-static';


export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://orlandocriativo.com.br";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        }
    ];
}
