import {Container, Box} from '@mui/material';
import Logo from '../../molecule/Logo';
import Typography from '../../atom/Typography';
const FooterComponent = (props:any)=>{
    const data = [
        {
            'heading': 'Editorial',
             'topics': [
                 'Book lists',
                 'What is Notfication?',
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
          <Container sx={{display: 'flex', justifyContent:'space-between'}} >
            <Box>
                <Logo height= {30} width={30} url= '/assets/logo.png' name= 'Blinkist' data-testid='logo'/>
                <Typography variant="h6" sx={{fontWeight: 'bold', color: 'blue'}} data-testid='slogan'>
                    Big ideas in small packages
                    Start learning now
                </Typography>
            </Box>
            <Box sx={{display: 'flex', justifyItems: 'center'}}>
                {
                    data.map((curr, i) => {
                        return (<Box key={`footer-${i}`} sx={{
                            margin: '0px 20px'
                        }} data-testid='topics'>
                            <Typography pb={2} sx={{fontWeight: 'bold'}}>
                                {curr.heading}
                            </Typography>
                            {
                                curr.topics.map(currTopic => {
                                    return <Typography pb={1}>
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