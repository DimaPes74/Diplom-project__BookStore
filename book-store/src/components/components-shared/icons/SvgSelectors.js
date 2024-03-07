export const SvgSelector = ({ id }) => {
    switch (id) {

        case 'Search':
            
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 10.5C4 6.92 6.92 4 10.5 4C14.08 4 17 6.92 17 10.5C17 12.29 16.27 13.92 15.09 15.09C13.92 16.27 12.29 17 10.5 17C6.92 17 4 14.08 4 10.5ZM21.71 20.29L17.18 15.76C18.32 14.31 19 12.48 19 10.5C19 5.81 15.19 2 10.5 2C5.81 2 2 5.81 2 10.5C2 15.19 5.81 19 10.5 19C12.48 19 14.31 18.32 15.76 17.18L20.29 21.71C20.49 21.9 20.74 22 21 22C21.26 22 21.51 21.9 21.71 21.71C22.1 21.32 22.1 20.68 21.71 20.29Z" fill="#313037"/>
                </svg>
            )

        case 'Vector':

        return (
            <svg width="24" height="24" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.612 2.41452C17.1722 1.96607 16.65 1.61034 16.0752 1.36763C15.5005 1.12492 14.8844 1 14.2623 1C13.6401 1 13.0241 1.12492 12.4493 1.36763C11.8746 1.61034 11.3524 1.96607 10.9126 2.41452L9.99977 3.34476L9.08699 2.41452C8.19858 1.50912 6.99364 1.00047 5.73725 1.00047C4.48085 1.00047 3.27591 1.50912 2.38751 2.41452C1.4991 3.31992 1 4.5479 1 5.82833C1 7.10875 1.4991 8.33674 2.38751 9.24214L3.30029 10.1724L9.99977 17L16.6992 10.1724L17.612 9.24214C18.0521 8.79391 18.4011 8.26171 18.6393 7.67596C18.8774 7.0902 19 6.46237 19 5.82833C19 5.19428 18.8774 4.56645 18.6393 3.9807C18.4011 3.39494 18.0521 2.86275 17.612 2.41452V2.41452Z" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )

        case 'Group':

        return (
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.1 1L1 17.3929C1 17.8191 1.15979 18.2279 1.44422 18.5293C1.72865 18.8307 2.11442 19 2.51667 19H17.4833C17.8856 19 18.2713 18.8307 18.5558 18.5293C18.8402 18.2279 19 17.8191 19 17.3929L16.9 1H3.1Z" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 7C13 7.53043 12.6839 8.03914 12.1213 8.41421C11.5587 8.78929 10.7956 9 10 9C9.20435 9 8.44129 8.78929 7.87868 8.41421C7.31607 8.03914 7 7.53043 7 7" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )

        case 'User':

        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#313037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )

        case 'ArrowLeft':

        return (
            <svg width="35" height="16" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00116 0.998965C8.00116 1.25897 7.90116 1.50897 7.71116 1.70897L3.41116 5.99897L41.0012 5.99897C41.5512 5.99897 42.0012 6.44896 42.0012 6.99896C42.0012 7.54896 41.5512 7.99896 41.0012 7.99896L3.41116 7.99896L7.71116 12.289C8.10116 12.679 8.10116 13.319 7.71116 13.709C7.32116 14.099 6.68116 14.099 6.29116 13.709L0.291162 7.70896C0.201162 7.61896 0.131162 7.50896 0.0811621 7.38896C0.0611621 7.33896 0.0411621 7.29896 0.0411621 7.24896C-0.00883789 7.08896 -0.00883789 6.90896 0.0411621 6.74896C0.0411621 6.69896 0.0611621 6.65897 0.0811621 6.60896C0.131162 6.48897 0.201162 6.37896 0.291162 6.28896L6.29116 0.288965C6.68116 -0.101035 7.32116 -0.101035 7.71116 0.288965C7.90116 0.488965 8.00116 0.738965 8.00116 0.998965Z" fill="#313037"/>
            </svg>
        )

        case 'ArrowUpRight':

        return (
            <svg width="35" height="16" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2925 13.7125C10.1025 13.5125 10.0025 13.2625 10.0025 13.0025C10.0025 12.7425 10.1025 12.4925 10.2925 12.2925L14.5925 8.0025L1.0025 8.0025C0.452501 8.0025 0.0025002 7.5525 0.00250023 7.0025C0.00250025 6.4525 0.452501 6.0025 1.0025 6.0025L14.5925 6.0025L10.2925 1.7125C9.9025 1.3225 9.9025 0.6825 10.2925 0.2925C10.6825 -0.0975003 11.3225 -0.0975003 11.7125 0.2925L17.7125 6.2925C17.8025 6.3825 17.8725 6.4925 17.9225 6.6125C17.9425 6.6625 17.9625 6.7025 17.9625 6.7525C18.0125 6.9125 18.0125 7.0925 17.9625 7.2525C17.9625 7.3025 17.9425 7.3425 17.9225 7.3925C17.8725 7.5125 17.8025 7.6225 17.7125 7.7125L11.7125 13.7125C11.3225 14.1025 10.6825 14.1025 10.2925 13.7125Z" fill="#313037"/>
            </svg>
        )

        case 'ArrowUpLeft':

        return (
            <svg width="35" height="16" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7075 0.287501C7.8975 0.487501 7.9975 0.737501 7.9975 0.997501C7.9975 1.2575 7.8975 1.5075 7.7075 1.7075L3.4075 5.9975L16.9975 5.9975C17.5475 5.9975 17.9975 6.4475 17.9975 6.9975C17.9975 7.5475 17.5475 7.9975 16.9975 7.9975L3.4075 7.9975L7.7075 12.2875C8.0975 12.6775 8.0975 13.3175 7.7075 13.7075C7.3175 14.0975 6.6775 14.0975 6.2875 13.7075L0.2875 7.7075C0.1975 7.6175 0.1275 7.5075 0.0775003 7.3875C0.0575003 7.3375 0.0375003 7.2975 0.0375003 7.2475C-0.0124997 7.0875 -0.0124997 6.9075 0.0375003 6.7475C0.0375003 6.6975 0.0575003 6.6575 0.0775003 6.6075C0.1275 6.4875 0.1975 6.3775 0.2875 6.2875L6.2875 0.287501C6.6775 -0.1025 7.3175 -0.1025 7.7075 0.287501Z" fill="#313037"/>
            </svg>
        )

        case 'HeartDislike':

        return (
            <svg width="24" height="28" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.612 5.41452C19.1722 4.96607 18.65 4.61034 18.0752 4.36763C17.5005 4.12492 16.8844 4 16.2623 4C15.6401 4 15.0241 4.12492 14.4493 4.36763C13.8746 4.61034 13.3524 4.96607 12.9126 5.41452L11.9998 6.34476L11.087 5.41452C10.1986 4.50912 8.99364 4.00047 7.73725 4.00047C6.48085 4.00047 5.27591 4.50912 4.38751 5.41452C3.4991 6.31992 3 7.5479 3 8.82833C3 10.1088 3.4991 11.3367 4.38751 12.2421L5.30029 13.1724L11.9998 20L18.6992 13.1724L19.612 12.2421C20.0521 11.7939 20.4011 11.2617 20.6393 10.676C20.8774 10.0902 21 9.46237 21 8.82833C21 8.19428 20.8774 7.56645 20.6393 6.9807C20.4011 6.39494 20.0521 5.86275 19.612 5.41452V5.41452Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )

        case 'HeartLike':

        return (
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.612 1.59567C16.1722 1.14723 15.65 0.791489 15.0752 0.548782C14.5005 0.306074 13.8844 0.181152 13.2623 0.181152C12.6401 0.181152 12.0241 0.306074 11.4493 0.548782C10.8746 0.791489 10.3524 1.14723 9.91255 1.59567L8.99977 2.52591L8.08699 1.59567C7.19858 0.69027 5.99364 0.181622 4.73725 0.181622C3.48085 0.181622 2.27591 0.69027 1.38751 1.59567C0.499101 2.50107 9.36088e-09 3.72905 0 5.00948C-9.36088e-09 6.28991 0.499101 7.51789 1.38751 8.42329L2.30029 9.35353L8.99977 16.1812L15.6992 9.35353L16.612 8.42329C17.0521 7.97506 17.4011 7.44286 17.6393 6.85711C17.8774 6.27136 18 5.64352 18 5.00948C18 4.37543 17.8774 3.7476 17.6393 3.16185C17.4011 2.5761 17.0521 2.0439 16.612 1.59567Z" fill="#FC857F"/>
            </svg>
        )

        case 'Cancel':

        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6569 16.2429L13.4142 12.0002L17.6569 7.75759C18.0472 7.36727 18.0472 6.7337 17.6569 6.34338C17.2665 5.95305 16.633 5.95305 16.2426 6.34338L12 10.586L7.75736 6.34338C7.36704 5.95305 6.73347 5.95305 6.34315 6.34338C5.95282 6.7337 5.95282 7.36727 6.34315 7.75759L10.5858 12.0002L6.34315 16.2429C5.95212 16.6339 5.95282 17.2668 6.34315 17.6571C6.73347 18.0474 7.36633 18.0481 7.75736 17.6571L12 13.4144L16.2426 17.6571C16.6337 18.0481 17.2665 18.0474 17.6569 17.6571C18.0472 17.2668 18.0479 16.6339 17.6569 16.2429Z" fill="#313037"/>
            </svg>
        )
    
        default:
            return <svg></svg>
    }
}