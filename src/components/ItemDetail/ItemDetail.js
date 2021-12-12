import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Container } from '@material-ui/core';
import ItemCount from '../ItemListContainer/ItemCount';
import { CardActions } from '@material-ui/core';
import './ItemDetail.css';



const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    },
    paper: {
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 1500,
    },
    image: {
    width: '100%', //la img tiene el 100% de ancho del tamaño de la etiqueta.
    height: 350,
    },
    img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    },
}));



function ItemDetail({itemDetailDB}){

    
    
    
    const classes = useStyles();
    
    return(
        

        <Container maxWidth="sm">
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={0}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="img" src={itemDetailDB.image} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} lg={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography className="textCard" gutterBottom variant="subtitle1">{itemDetailDB.name}</Typography>
                                <Typography className="textCard" variant="body2" gutterBottom>{itemDetailDB.description}</Typography>
                                <Grid item>
                                    <Typography variant="subtitle1">$ {itemDetailDB.price}</Typography>
                                </Grid>   
                                    <Typography variant="body2" color="textSecondary">{itemDetailDB.stock} unidades disponibles</Typography>
                            </Grid>
                                <Grid item> 
                                <CardActions className="card_actions">
                                    {/* <Typography variant="body2" style={{ cursor: 'pointer' }}>Añadir</Typography> */}
                                    <ItemCount productStock={itemDetailDB.stock}/>
                                </CardActions>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </Container>
    )
        }


export default ItemDetail;