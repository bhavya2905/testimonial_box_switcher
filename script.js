const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testmonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials=[
    {
        name: 'gourav',
        position: 'senior developer',
        photo: 'https://randomuser.me/api/portraits/men/44.jpg',
        text: 'vfyujknmfnhguijkdmfvbfjd fdghsyuijklcnj vcdfy8su9ijkcbvn vgyfdiuhbv vgyedhub gyhjbhvgftyu vgvgghbn frteydushc tyujfdnbvfgdh cfgsijk gfyudijsk dhgsj hgfyudis vfhdj fvhgdhsj vfgdui ieuds ieudsj tfgb ryfhd ehdjn ehdbn edhbn edhn '

    },
    {
        name: 'chinni',
        position: 'senior developer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'vfyujknmfnhguijkdmfvbfjd fdghsyuijklcnj vcdfy8su9ijkcbvn vgyfdiuhbv vgyedhub gyhjbhvgftyu vgvgghbn frteydushc tyujfdnbvfgdh cfgsijk gfyudijsk dhgsj hgfyudis vfhdj fvhgdhsj vfgdui ieuds ieudsj tfgb ryfhd ehdjn ehdbn edhbn edhn '

    },
    {
        name: 'snithik',
        position: 'senior developer',
        photo: 'https://randomuser.me/api/portraits/men/44.jpg',
        text: 'vfyujknmfnhguijkdmfvbfjd fdghsyuijklcnj vcdfy8su9ijkcbvn vgyfdiuhbv vgyedhub gyhjbhvgftyu vgvgghbn frteydushc tyujfdnbvfgdh cfgsijk gfyudijsk dhgsj hgfyudis vfhdj fvhgdhsj vfgdui ieuds ieudsj tfgb ryfhd ehdjn ehdbn edhbn edhn '

    }, 
    {
        name: 'gourav',
        position: 'senior developer',
        photo: 'https://randomuser.me/api/portraits/men/44.jpg',
        text: 'vfyujknmfnhguijkdmfvbfjd fdghsyuijklcnj vcdfy8su9ijkcbvn vgyfdiuhbv vgyedhub gyhjbhvgftyu vgvgghbn frteydushc tyujfdnbvfgdh cfgsijk gfyudijsk dhgsj hgfyudis vfhdj fvhgdhsj vfgdui ieuds ieudsj tfgb ryfhd ehdjn ehdbn edhbn edhn '

    },
    {
        name: 'triveni',
        position: 'senior developer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'vfyujknmfnhguijkdmfvbfjd fdghsyuijklcnj vcdfy8su9ijkcbvn vgyfdiuhbv vgyedhub gyhjbhvgftyu vgvgghbn frteydushc tyujfdnbvfgdh cfgsijk gfyudijsk dhgsj hgfyudis vfhdj fvhgdhsj vfgdui ieuds ieudsj tfgb ryfhd ehdjn ehdbn edhbn edhn '

    },
    {
        name: 'gourav',
        position: 'senior developer',
        photo: 'https://randomuser.me/api/portraits/men/44.jpg',
        text: 'vfyujknmfnhguijkdmfvbfjd fdghsyuijklcnj vcdfy8su9ijkcbvn vgyfdiuhbv vgyedhub gyhjbhvgftyu vgvgghbn frteydushc tyujfdnbvfgdh cfgsijk gfyudijsk dhgsj hgfyudis vfhdj fvhgdhsj vfgdui ieuds ieudsj tfgb ryfhd ehdjn ehdbn edhbn edhn '

    }
];

let idx=1;
function updateTestimonial(){
    const {name, position, photo, text} = testimonials[idx]
    testimonial.innerHTML = text;
    userImage.src = photo;
    userName.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if(idx==testimonials.length-1){
        idx=0;
    }
}
setInterval(updateTestimonial, 10000);
