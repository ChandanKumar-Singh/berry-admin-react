import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useSpring, animated } from 'react-spring';
import NavItem from '../NavItem';

const NavCollapse = ({ menu, level }) => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [badgeCount, setBadgeCount] = useState(0); // New state for badge count

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
    setSelected((prevSelected) => (prevSelected !== menu.id ? menu.id : null));
    if (menu?.path && menu?.path !== '') {
      navigate(menu.children[0]?.url);
    }
  };

  const { pathname } = useLocation();
  const checkOpenForParent = (child, id) => {
    child.forEach((item) => {
      if (item.url === pathname) {
        setOpen(true);
        setSelected(id);
      }
    });
  };

  useEffect(() => {
    setOpen(false);
    setSelected(null);
    if (menu.children) {
      menu.children.forEach((item) => {
        if (item.children?.length) {
          checkOpenForParent(item.children, menu.id);
        }
        if (item.url === pathname) {
          setSelected(menu.id);
          setOpen(true);
        }
      });
    }
  }, [pathname, menu.children]);

  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return <NavCollapse key={item.id} menu={item} level={level + 1} />;
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const Icon = menu.icon;
  const menuIcon = menu.icon ? (
    <Icon strokeWidth={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: selected === menu.id ? 8 : 6,
        height: selected === menu.id ? 8 : 6,
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  // Spring animation for collapse/expand
  const animatedProps = useSpring({
    height: open ? 'auto' : '0px',
    opacity: open ? 1 : 0,
  });

  return (
    <>
      <ListItemButton
        sx={{
          borderRadius: `${customization.borderRadius}px`,
          mb: 0.2,
          alignItems: 'flex-start',
          backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
          py: level > 1 ? 0.25 : 0.35,
          pl: `${level * 24}px`,
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }}
        selected={selected === menu.id}
        onClick={handleClick}
        aria-expanded={open}
        aria-label={menu.title}
      >
        <ListItemIcon sx={{ my: 'auto', minWidth: !menu.icon ? 10 : 25 }}>{menuIcon}</ListItemIcon>
        <ListItemText
          primary={
            <Typography variant={selected === menu.id ? 'body1' : 'caption'} color="inherit" sx={{ my: 'auto' }}>
              {menu.title}
            </Typography>
          }
          secondary={
            menu.caption && (
              <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                {menu.caption}
              </Typography>
            )
          }
        />
        <Badge badgeContent={badgeCount} color="primary" variant="dot" invisible={badgeCount === 0} />
        {open ? (
          <Tooltip title="Collapse" arrow>
            <IconChevronUp stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
          </Tooltip>
        ) : (
          <Tooltip title="Expand" arrow>
            <IconChevronDown stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
          </Tooltip>
        )}
      </ListItemButton>
      <animated.div style={animatedProps}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            sx={{
              position: 'relative',
              '&:after': {
                content: "''",
                position: 'absolute',
                left: '32px',
                top: 0,
                height: '100%',
                width: '1px',
                opacity: 1,
                background: theme.palette.primary.light,
              },
            }}
          >
            {menus}
          </List>
        </Collapse>
      </animated.div>
    </>
  );
};

NavCollapse.propTypes = {
  menu: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
};

export default NavCollapse;
