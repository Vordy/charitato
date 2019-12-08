import React, { useContext } from 'react'
import {
    InterfaceContainer,
    MilestoneContainer,
    MilestoneSmallContainer,
    MilestoneHeader,
    MilestoneText
} from 'common/dashboard/Interface'
// import { UserContext } from 'pages/Dashboard'

export const MilestonesInterface = () => {
    // const user = useContext(UserContext)

    return (
        <InterfaceContainer>
            <MilestoneSmallContainer>
                <MilestoneHeader>Your Total Contribution</MilestoneHeader>
                <MilestoneText>$100,000</MilestoneText>
            </MilestoneSmallContainer>
            <MilestoneContainer>
                <MilestoneHeader>Total Contribution</MilestoneHeader>
                <MilestoneText>$100,000</MilestoneText>
            </MilestoneContainer>
            <MilestoneSmallContainer>
                <MilestoneHeader>Friends' Total Contribution</MilestoneHeader>
                <MilestoneText>$100,000</MilestoneText>
            </MilestoneSmallContainer>
        </InterfaceContainer>
        // <div>
        //     <div>Milestones Interface</div>
        //     <div>Username: {user.username}</div>
        // </div>
    );
}
