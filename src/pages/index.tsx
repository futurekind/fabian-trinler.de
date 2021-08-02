import Avatar from 'components/blocks/Avatar';
import * as React from 'react';
import styled from 'styled-components';

const View = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IndexPage = () => (
    <View>
        <Avatar />
    </View>
);

export default IndexPage;
