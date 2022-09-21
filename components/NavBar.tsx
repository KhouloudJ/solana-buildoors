import { HStack, Spacer, Button } from '@chakra-ui/react'
import {FC} from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import styles from "../styles/Home.module.css"
const NavBar: FC = () => {
return (
    <HStack width="full" padding={4}>
        <Spacer/>
        <WalletMultiButton className={styles["wallet-adapter-button-trigger"]}/>
    </HStack>
)
}

export default NavBar