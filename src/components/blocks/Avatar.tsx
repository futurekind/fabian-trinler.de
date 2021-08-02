import React, { FC } from 'react';
import Image from 'next/image';

import image from '../../../public/fabi.jpg';
import styled from 'styled-components';
import { colors } from 'utils/styles';

const View = styled.figure`
    margin: 0;
    position: relative;

    &::before,
    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    &::before {
        top: -30px;
        left: -40px;
        background-color: ${colors.green};
        transform: rotate(5deg);
    }

    &::after {
        top: 40px;
        left: 30px;
        background-color: ${colors.yellow};
        transform: rotate(3deg);
    }
`;

const Wrapper = styled.div`
    display: flex;
    border: 10px solid ${colors.pink};
    position: relative;
    z-index: 1;
    transform: rotate(-2deg);
`;

const Avatar: FC = () => {
    return (
        <View>
            <Wrapper>
                <Image
                    src={image}
                    layout="intrinsic"
                    width={300}
                    height={300}
                />
            </Wrapper>
        </View>
    );
};

export default Avatar;
