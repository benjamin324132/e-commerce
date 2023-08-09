import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const parsedValues = Object.fromEntries(url.searchParams);
   
    let { title } = parsedValues;


    title = title || "Mnu24";
    const backgroundColor = "#ffffff";
    const titleColor =  "#000000";

    const fontSize = title.length > 20 ? 80 : 120;

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: fontSize,
            background: backgroundColor,
            color: titleColor,
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {title}
        </div>
      ),
      {
        width: 1200,
        height: 600,
      }
    );
  } catch (error) {
    return new Response("Canot generate image", { status: 500 });
  }
}