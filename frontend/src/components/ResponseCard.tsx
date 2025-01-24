import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

interface ResponseCardProps {
    image?: string,
    text: string
}


export function ResponseCard({ image, text }: ResponseCardProps) {
    return (
        <Card className="mt-6 w-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardHeader
                shadow={false}
                floated={false}
                className={`relative ${!image ? 'animate-pulse' : ''} grid h-56 place-items-center bg-gray-300`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                {!image && <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-12 w-56 text-gray-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                </svg>}

                {image && <img src={`data:image/png;base64,${image}`} alt="response" />}
            </CardHeader>
            <CardBody
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className={`${!text ? 'animate-pulse' : ''}`}>
                {!text && (
                    <>
                        <Typography
                            as="div"
                            variant="paragraph"
                            className="mb-1 h-3 w-full rounded-full bg-gray-300"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            &nbsp;
                        </Typography>
                        <Typography
                            as="div"
                            variant="paragraph"
                            className="mb-1 h-2 w-56 rounded-full bg-gray-300"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                        >
                            &nbsp;
                        </Typography>
                    </>
                )}

                {text && <p className='font-bold'>{text}</p>}
            </CardBody>
        </Card>
    );
}