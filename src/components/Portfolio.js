import React from 'react';
import { Github, Linkedin, Mail, Code, Database, Coffee } from 'lucide-react';

const Portfolio = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f3e8ff 0%, #ffffff 100%)' }}>
      {/* Header */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '24px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#7c3aed', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <Code size={24} color="white" />
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#1f2937' }}>CB</span>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{ 
            padding: '8px 16px', 
            borderRadius: '20px', 
            border: '1px solid #d1d5db', 
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
            Proyectos
          </button>
          <button style={{ 
            padding: '8px 16px', 
            borderRadius: '20px', 
            border: 'none', 
            backgroundColor: '#7c3aed', 
            color: 'white',
            cursor: 'pointer'
          }}>
            Contacto
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 'bold', 
            color: '#1f2937', 
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            Desarrollador .NET &<span style={{ color: '#7c3aed' }}> Full Stack</span>
          </h1>

          <p style={{ 
            fontSize: '20px', 
            color: '#6b7280', 
            maxWidth: '600px', 
            margin: '0 auto 32px',
            lineHeight: '1.6'
          }}>
            Desarrollo aplicaciones robustas y escalables. Me especializo en .NET, C# y tecnologías web modernas.
          </p>

          {/* Profile Image */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
            <div style={{ 
              width: '128px', 
              height: '128px', 
              background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}>
              <div style={{ 
                width: '112px', 
                height: '112px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#7c3aed' }}>CA</span>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
              Camilo Blas Asto Aiquipa
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
              <span style={{ 
                padding: '4px 12px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '16px', 
                fontSize: '14px',
                color: '#374151'
              }}>
                19 años
              </span>
              <span style={{ 
                padding: '4px 12px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '16px', 
                fontSize: '14px',
                color: '#374151'
              }}>
                Computación e Informática
              </span>
              <span style={{ 
                padding: '4px 12px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '16px', 
                fontSize: '14px',
                color: '#374151'
              }}>
                Desarrollador .NET
              </span>
            </div>
          </div>

          {/* Skills */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '16px', 
            maxWidth: '800px', 
            margin: '0 auto 32px' 
          }}>
            <div style={{ 
              padding: '24px', 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#ede9fe', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 8px' 
              }}>
                <Code size={24} color="#7c3aed" />
              </div>
              <h3 style={{ fontWeight: '600', color: '#7c3aed', marginBottom: '4px' }}>C#</h3>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>Favorito</p>
            </div>

            <div style={{ 
              padding: '24px', 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#dbeafe', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 8px' 
              }}>
                <Database size={24} color="#2563eb" />
              </div>
              <h3 style={{ fontWeight: '600', color: '#2563eb', marginBottom: '4px' }}>SQL</h3>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>Base de Datos</p>
            </div>

            <div style={{ 
              padding: '24px', 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#fef3c7', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 8px' 
              }}>
                <span style={{ color: '#d97706', fontWeight: 'bold', fontSize: '18px' }}>JS</span>
              </div>
              <h3 style={{ fontWeight: '600', color: '#d97706', marginBottom: '4px' }}>JavaScript</h3>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>Frontend</p>
            </div>

            <div style={{ 
              padding: '24px', 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#fecaca', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 8px' 
              }}>
                <Coffee size={24} color="#dc2626" />
              </div>
              <h3 style={{ fontWeight: '600', color: '#dc2626', marginBottom: '4px' }}>Java</h3>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>Backend</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', marginBottom: '32px' }}>
            <button style={{ 
              padding: '12px 32px', 
              backgroundColor: '#7c3aed', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px', 
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Mail size={16} />
              Contáctame
            </button>
            <button style={{ 
              padding: '12px 32px', 
              backgroundColor: 'white', 
              color: '#374151', 
              border: '1px solid #d1d5db', 
              borderRadius: '8px', 
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Github size={16} />
              Ver Proyectos
            </button>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            <a href="#" style={{ color: '#9ca3af' }}>
              <Github size={24} />
            </a>
            <a href="#" style={{ color: '#9ca3af' }}>
              <Linkedin size={24} />
            </a>
            <a href="#" style={{ color: '#9ca3af' }}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;