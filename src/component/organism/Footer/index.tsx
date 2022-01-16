import {Container, Box} from '@mui/material';
import Logo from '../../molecule/Logo';
import Typography from '../../atom/Typography';
const FooterComponent = (props:any)=>{
    const data = [
        {
            'heading': 'Editorial',
             'topics': [
                 'Book lists',
                 'What is Nonfiction?',
                 'What to read next?',
                 'Benefits of reading'
             ]
        },
        {
            'heading': 'Useful links',
             'topics': [
                 'Pricing',
                 'Blinkist business',
                 'Gift cards',
                 'Blinkist magaine'
             ]
        },
        {
            'heading': 'Company',
             'topics': [
                 'About',
                 'Carrer',
                 'partners',
                 'Code of Conduct'
             ]
        }
    ]
    return (
        <Box {...props}>
          <Container sx={{display: 'flex', justifyItems:'spaceBetween'}} >
            <Box>
                {/* <Logo height= '30' url= '/assets/logo.png' name= 'Blinkist'/> */}
                <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                    Big ideas in small packages
                    Start learnign now
                </Typography>
            </Box>
            <Box sx={{display: 'flex'}}>
                {
                    data.map(curr => {
                        return (<Box sx={{margin: '0px 20px'}}>
                            <Typography sx={{fontWeight: 'bold'}}>
                                {curr.heading}
                            </Typography>
                            {
                                curr.topics.map(currTopic => {
                                    return <Typography>
                                        {currTopic}
                                    </Typography>
                                })
                            }
                        </Box>)
                    })
                }
            </Box>
        </Container>
        </Box>
        
    )
}

export default FooterComponent;