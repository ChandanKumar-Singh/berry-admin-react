import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tooltip from '@mui/material/Tooltip';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { SET_MENU } from 'store/actions';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
  const { pathname } = useLocation();
  const customization = useSelector((state) => state.customization);

  const isSelected = pathname === item.url;

  const handleMenuOpen = () => {
    /// if small device, close the menu drawer otherwise open the menu
    if (matchesSM) {
      dispatch({ type: SET_MENU, opened: false });
    }

  };

  return (
    <Tooltip title={matchesSM ? '' : item.title} arrow>
      <ListItemButton
        component={forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} />)}
        onClick={handleMenuOpen}
        selected={isSelected}
        sx={{
          borderRadius: `${customization.borderRadius}px`,
          mb: 0.2,
          alignItems: 'flex-start',
          backgroundColor: isSelected ? theme.palette.action.selected : 'transparent',
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          pl: `${level * 24}px`,
        }}
      >
        <ListItemIcon sx={{ my: 'auto', minWidth: !item.icon ? 10 : 25 }}>
          {item.icon ? (
            <item.icon strokeWidth={1.5} size="1rem" />
          ) : (
            <FiberManualRecordIcon sx={{ width: 8, height: 8 }} fontSize={level > 0 ? 'inherit' : 'medium'} />
          )}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant={isSelected ? 'body1' : 'caption'} color="inherit" sx={{ my: 'auto' }}>
              {item.title}
            </Typography>
          }
          secondary={
            item.caption && (
              <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                {item.caption}
              </Typography>
            )
          }
        />
        {item.badge && (
          <Chip
            label={item.badge.value}
            size="small"
            color={item.badge.color ?? 'primary'}
            justifyContent="flex-end"
            sx={{ ml: 1, height: 20, fontSize: '0.75rem' }}
          />
        )}
      </ListItemButton>
    </Tooltip>
  );
};

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
};

export default NavItem;
