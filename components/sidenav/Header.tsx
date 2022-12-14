import { FlexProps, Flex, useColorModeValue, IconButton, HStack, Menu, MenuButton, Avatar, VStack, MenuList, MenuItem, MenuDivider,Text, Box } from "@chakra-ui/react";

import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";

interface MobileProps extends FlexProps {
    onOpen: () => void;
}

export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="10"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold">
                Paises
            </Text>

            
        </Flex>
    );
};