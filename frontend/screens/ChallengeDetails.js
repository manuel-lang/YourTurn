import * as React from "react";
import {ScrollView} from "react-native";
import FeedItem from "./FeedItem";
import Minhkha from "./Minhkha";

const ChallengeDetails = ({route}) => {
    return (
        <ScrollView>
            <FeedItem
                ownerImageURI={route.params.data.ownerImageURI}
                ownerName={route.params.data.ownerName}
                baseUrl={route.params.data.baseUrl}
                userId={route.params.data.userId}
                challengeImageURI={route.params.data.challengeImageURI}
                challengeTitle={route.params.data.challengeTitle}
                participantImages={route.params.data.participantImages}
                participantNames={route.params.data.participantNames}
                likes={route.params.data.likes}
                comments={route.params.data.comments}
                favorit={route.params.data.favorit}
                privateChallenge={route.params.data.privateChallenge}
                coopetition={route.params.data.coopetition}
                description={route.params.data.description}
                tags={route.params.data.tags}
                proof={route.params.data.proof}
                voting={route.params.data.voting}
                bet={route.params.data.bet}
                deadline={route.params.data.deadline}
            />
            <Minhkha
                baseUrl={route.params.data.baseUrl}
                userId={route.params.data.userId}
                description={route.params.data.description}
                tagList={route.params.data.tags}
                proof={route.params.data.proof}
                voting={route.params.data.voting}
                bet={route.params.data.bet}
                deadline={route.params.data.deadline}
                participantImages={route.params.data.participantImages}
                participantNames={route.params.data.participantNames}
                onPressDetails={() => []}
            />
        </ScrollView>
    )
}

export default ChallengeDetails;
