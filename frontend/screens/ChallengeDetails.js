import * as React from "react";
import {ScrollView, View, Text, StyleSheet } from "react-native";
import FeedItem from "./FeedItem";
import FeedItemDetails from "./FeedItemDetails";
import Modal from 'react-native-modal';

const ChallengeDetails = ({route}) => {

    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    const ModalComponent = () => {
        return (
            <View>
              <Modal
                  isVisible={ isModalVisible }
                  onBackdropPress={() => toggleModal()}
                  backdropColor='None'
                  onModalShow = {() => {
                      setTimeout(toggleModal, 3000);
                  }}
              >
                <View style={styles.friendsAddedModal}>
                  <Text>Freunde wurden hinzugefügt!</Text>
                </View>
              </Modal>
            </View>
        )
    }

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
            <FeedItemDetails
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
                onPressBackTest={toggleModal}
            />
            <ModalComponent />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    friendsAddedModal: {
        backgroundColor: 'orange',
        height: 20,
        width: '80%'
    }
})

export default ChallengeDetails;
