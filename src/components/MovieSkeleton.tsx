import { Card, CardBody, Skeleton, SkeletonText, Spinner } from "@chakra-ui/react"

function MovieSkeleton(){
    return(
        <>
        {/* <Card>
            <Skeleton />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card> */}
        <Spinner background='white' width='50px'></Spinner>
        </>
    )
}

export default MovieSkeleton